import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { homeFormSchema, type HomeFormSchema } from "../model/form-schema";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { SelectOption } from "@/shared/ui";
import {
  useGetDeliveryPointsQuery,
  useGetDeliveryPackageTypesQuery,
  useCalculateDeliveryMutation
} from "@/shared/api";
import { PagePaths } from "@/shared/config";
import { toastGraphqlErrros, omit } from "@/shared/lib";
import { useCreateDeliveryStore } from "@/entities/delivery";

interface UseHomePage {
  formErrors: FieldErrors<HomeFormSchema>;
  deliveryPointsOptions: SelectOption[];
  deliveryPackageTypesOptions: SelectOption[];
  register: UseFormRegister<HomeFormSchema>;
  onFormSubmit: () => unknown;
}

export const useHomePage = (): UseHomePage => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm<HomeFormSchema>({
    resolver: zodResolver(homeFormSchema)
  });

  const { setOptionsAndPoints } = useCreateDeliveryStore();

  const { data: deliveryPointsData } = useGetDeliveryPointsQuery();
  const { data: deliveryPackageTypesData } = useGetDeliveryPackageTypesQuery();
  const [calculateDelivery] = useCalculateDeliveryMutation();

  const deliveryPointsOptions: SelectOption[] = deliveryPointsData
    ? deliveryPointsData.getDeliveryPoints.points.map((point) => ({
        label: point.name,
        value: point.id
      }))
    : [];

  const deliveryPackageTypesOptions: SelectOption[] = deliveryPackageTypesData
    ? deliveryPackageTypesData.getDeliveryPackageTypes.packages.map((packageType) => {
        return {
          label: `${packageType.name}, ${packageType.width}x${packageType.height}x${packageType.length}`,
          value: packageType.id
        };
      })
    : [];

  // Functions
  async function onSubmitFx(data: HomeFormSchema) {
    try {
      if (!deliveryPointsData || !deliveryPackageTypesData) return;

      const sp = deliveryPointsData.getDeliveryPoints.points.find(
        (point) => point.id === data.senderPoint
      );
      const rp = deliveryPointsData.getDeliveryPoints.points.find(
        (point) => point.id === data.receiverPoint
      );
      const p = deliveryPackageTypesData.getDeliveryPackageTypes.packages.find(
        (packageType) => packageType.id === data.package
      );

      if (!sp || !rp || !p) throw new Error("Unexpected error!");

      const senderPoint = omit(sp, "__typename");
      const receiverPoint = omit(rp, "__typename");

      const response = await calculateDelivery({
        variables: {
          package: omit(p, "__typename", "id", "name"),
          senderPoint: {
            latitude: senderPoint.latitude,
            longitude: senderPoint.longitude
          },
          receiverPoint: {
            latitude: receiverPoint.latitude,
            longitude: receiverPoint.longitude
          }
        }
      });

      if (response.errors) return toastGraphqlErrros(response.errors);
      if (!response.data) throw new Error("Unexpected error!");

      const options = response.data.calculateDelivery.options.map(
        ({ id, name, days, price, type }) => ({
          id,
          name,
          days,
          price,
          type
        })
      );

      setOptionsAndPoints({ options, senderPoint, receiverPoint });
      navigate({ to: PagePaths.CREATE_DELIVERY });
    } catch (error) {
      console.error(error);
    }
  }
  // Functions END

  return {
    formErrors: formState.errors,
    deliveryPointsOptions,
    deliveryPackageTypesOptions,
    register,
    onFormSubmit: handleSubmit(onSubmitFx)
  };
};

import type { FormContext } from "vee-validate";
import type { HomeFormSchema } from "../model";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import { homeFormSchema } from "../model";
import {
  calculateDelivery,
  type DeliveryPackageType,
  type DeliveryPoint,
  getDeliveryPackageTypes,
  getDeliveryPoints
} from "@/entities/delivery";
import type { SelectOption } from "@/shared/ui";
import { computed, type ComputedRef, onMounted, ref, watch } from "vue";
import { PagePaths } from "@/shared/config";
import { useCreateDeliveryStore } from "@/entities/delivery/model/create-delivery-store";

interface UseHomePage {
  form: FormContext<HomeFormSchema>;
  deliveryPointsOptions: ComputedRef<SelectOption[]>;
  deliveryPackageTypesOptions: ComputedRef<SelectOption[]>;
  onFormSubmit: () => void;
}

export const useHomePage = (): UseHomePage => {
  const router = useRouter();

  const createDeliveryStore = useCreateDeliveryStore();

  const form = useForm<HomeFormSchema>({
    validationSchema: homeFormSchema
  });

  const deliveryPoints = ref<DeliveryPoint[]>([]);
  const deliveryPackageTypes = ref<DeliveryPackageType[]>([]);

  const deliveryPointsOptions = computed(() =>
    (deliveryPoints.value ?? []).map((el) => ({
      label: el.name,
      value: el.id
    }))
  );

  const deliveryPackageTypesOptions = computed(() =>
    (deliveryPackageTypes.value ?? []).map((el) => ({
      label: el.name,
      value: el.id
    }))
  );

  onMounted(async () => {
    const deliveryPointsResponse = await getDeliveryPoints().json();
    deliveryPoints.value = deliveryPointsResponse.points;

    const deliveryPackageTypesResponse = await getDeliveryPackageTypes().json();
    deliveryPackageTypes.value = deliveryPackageTypesResponse.packages;
  });

  // Functions
  async function onSubmitFx(data: HomeFormSchema) {
    try {
      if (!deliveryPoints.value.length || !deliveryPackageTypes.value.length) return;

      const senderPoint = deliveryPoints.value.find(
        (point) => point.id === data.senderPoint
      );
      const receiverPoint = deliveryPoints.value.find(
        (point) => point.id === data.receiverPoint
      );
      const deliveryPackage = deliveryPackageTypes.value.find(
        (packageType) => packageType.id === data.package
      );

      if (!senderPoint || !receiverPoint || !deliveryPackage)
        throw new Error("Unexpected error!");

      const { options } = await calculateDelivery({
        senderPoint: {
          latitude: senderPoint.latitude,
          longitude: senderPoint.longitude
        },
        receiverPoint: {
          latitude: receiverPoint.latitude,
          longitude: receiverPoint.longitude
        },
        package: {
          length: deliveryPackage.length,
          height: deliveryPackage.height,
          weight: deliveryPackage.weight,
          width: deliveryPackage.width
        }
      }).json();

      // if (!response.data) throw new Error("Unexpected error!");

      createDeliveryStore.setOptionsAndPoints({ options, senderPoint, receiverPoint });
      await router.push({ path: PagePaths.CREATE_DELIVERY });
    } catch (error) {
      console.error(error);
    }
  }
  // Functions END

  return {
    form,
    deliveryPointsOptions,
    deliveryPackageTypesOptions,
    onFormSubmit: form.handleSubmit(onSubmitFx)
  };
};

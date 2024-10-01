import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { createDeliveryFormSchema, type CreateDeliveryFormSchema } from "../model";
import type { UseFormReturn } from "react-hook-form";
import type { CalculateDeliveryOptions } from "@/shared/api";
import { useCreateDeliveryOrderMutation } from "@/shared/api";
import { PagePaths } from "@/shared/config";
import { useCreateDeliveryStore } from "@/entities/delivery";

interface UseCreateDeliveryPage {
  isResultDialogShowed: boolean;
  deliveryOptions: CalculateDeliveryOptions;
  form: UseFormReturn<CreateDeliveryFormSchema>;
  onFormSubmit: () => void;
  onResultDialogClose: () => void;
  onResultDialogSubmit: () => void;
}

export const useCreateDeliveryPage = (): UseCreateDeliveryPage => {
  const navigate = useNavigate();

  const form = useForm<CreateDeliveryFormSchema>({
    resolver: zodResolver(createDeliveryFormSchema)
  });

  const [isResultDialogShowed, setIsResultDialogShowed] = useState(false);
  const {
    options: deliveryOptions,
    receiverPoint,
    senderPoint,
    setOptionsAndPoints
  } = useCreateDeliveryStore();

  const [createDeliveryOrder] = useCreateDeliveryOrderMutation();

  useEffect(() => {
    if (!deliveryOptions || !receiverPoint || !senderPoint) {
      navigate({ to: PagePaths.HOME });
    }
  }, []);

  // Functions
  async function onSubmit(data: CreateDeliveryFormSchema) {
    try {
      if (!deliveryOptions || !receiverPoint || !senderPoint) return;

      const option = deliveryOptions.find((o) => o.id === data.optionTypeId);
      if (!option) return;

      await createDeliveryOrder({
        variables: {
          receiverPoint,
          senderPoint,
          option,
          ...data
        }
      });

      setIsResultDialogShowed(true);
    } catch (error) {
      console.error(error);
    }
  }

  const onResultDialogClose = useCallback(
    (path: string) => {
      navigate({ to: path });
      setOptionsAndPoints({ options: null, receiverPoint: null, senderPoint: null });
    },
    [setOptionsAndPoints, navigate]
  );
  // Functions END

  return {
    isResultDialogShowed,
    deliveryOptions: deliveryOptions ?? [],
    form,
    onFormSubmit: form.handleSubmit(onSubmit),
    onResultDialogClose: () => onResultDialogClose(PagePaths.HOME),
    onResultDialogSubmit: () => onResultDialogClose(PagePaths.DELIVERIES_HISTORY)
  };
};

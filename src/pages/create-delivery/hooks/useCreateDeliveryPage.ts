import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { createDeliveryFormSchema, type CreateDeliveryFormSchema } from "../model";
import type { UseFormReturn } from "react-hook-form";
import type { CalculateDeliveryOptions } from "@/shared/api";
import { Payer, useCreateDeliveryOrderMutation } from "@/shared/api";
import { PagePaths } from "@/shared/config";
import { useCreateDeliveryStore } from "@/entities/delivery";

interface UseCreateDeliveryPage {
  isResultDialogShowed: boolean;
  options: CalculateDeliveryOptions;
  form: UseFormReturn<CreateDeliveryFormSchema>;
  onFormSubmit: () => unknown;
  onResultDialogClose: () => void;
  onResultDialogSubmit: () => void;
}

export const useCreateDeliveryPage = (): UseCreateDeliveryPage => {
  const navigate = useNavigate();

  const form = useForm<CreateDeliveryFormSchema>({
    resolver: zodResolver(createDeliveryFormSchema),
    defaultValues: {
      receiver: {
        firstname: "receiver firstname",
        lastname: "receiver lastname",
        middlename: "receiver middlename",
        phone: "receiver phone"
      },
      sender: {
        firstname: "sender firstname",
        lastname: "sender lastname",
        middlename: "sender middlename",
        phone: "sender phone"
      },
      senderAddress: {
        apartment: "senderAddress apartament",
        house: "senderAddress house",
        street: "senderAddress street",
        comment: "senderAddress comment"
      },
      receiverAddress: {
        apartment: "receiverAddress apartament",
        house: "receiverAddress house",
        street: "receiverAddress street",
        comment: "receiverAddress comment"
      },
      payer: Payer.Sender
    }
  });

  const [isResultDialogShowed, setIsResultDialogShowed] = useState(false);
  const { options, receiverPoint, senderPoint, setOptionsAndPoints } =
    useCreateDeliveryStore();

  const [createDeliveryOrder] = useCreateDeliveryOrderMutation();

  useEffect(() => {
    if (!options || !receiverPoint || !senderPoint) {
      navigate({ to: PagePaths.HOME });
    }
  }, []);

  // Functions
  async function onSubmit(data: CreateDeliveryFormSchema) {
    try {
      if (!options || !receiverPoint || !senderPoint) return;

      const option = options.find((o) => o.id === data.optionTypeId);
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

  const onResultDialogClose = useCallback(() => {
    navigate({ to: PagePaths.HOME });
    setOptionsAndPoints({ options: null, receiverPoint: null, senderPoint: null });
  }, [setOptionsAndPoints, navigate]);

  const onResultDialogSubmit = useCallback(() => {
    navigate({ to: PagePaths.DELIVERIES_HISTORY });
    setOptionsAndPoints({ options: null, receiverPoint: null, senderPoint: null });
  }, [setOptionsAndPoints, navigate]);
  // Functions END

  return {
    isResultDialogShowed,
    options: options ?? [],
    form,
    onFormSubmit: form.handleSubmit(onSubmit),
    onResultDialogClose,
    onResultDialogSubmit
  };
};

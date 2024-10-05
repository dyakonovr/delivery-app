import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { createDeliveryFormSchema, type CreateDeliveryFormSchema } from "../model";
import type { UseFormReturn } from "react-hook-form";
import type { MultistepFormScreens } from "@/pages/create-delivery/ui/MultistepForm";
import { Payer, useCreateDeliveryOrderMutation } from "@/shared/api";
import { PagePaths } from "@/shared/config";
import { useCreateDeliveryStore } from "@/entities/delivery";
import {
  streetFieldRegex,
  humanNameRegex,
  onlyNumbersRegex
} from "@/pages/create-delivery/model/form-patterns.ts";

interface UseCreateDeliveryPage {
  isResultDialogShowed: boolean;
  form: UseFormReturn<CreateDeliveryFormSchema>;
  screens: MultistepFormScreens;
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

  const { sender, senderAddress, receiverAddress, receiver } = form.getValues();
  const screens: MultistepFormScreens = [
    {
      type: "options",
      title: "Способ доставки",
      options: deliveryOptions ?? [],
      registerKey: "optionTypeId",
      key: "form-delivery-options"
    },
    {
      type: "inputs",
      title: "Получатель",
      fields: [
        {
          labelText: "Фамилия",
          placeholder: "Фамилия",
          registerKey: "receiver.lastname",
          patternOnInput: humanNameRegex
        },
        {
          labelText: "Имя",
          placeholder: "Имя",
          registerKey: "receiver.firstname",
          patternOnInput: humanNameRegex
        },
        {
          labelText: "Отчество",
          placeholder: "Отчество (при наличии)",
          registerKey: "receiver.middlename",
          patternOnInput: humanNameRegex
        },
        {
          labelText: "Номер телефона",
          placeholder: "Телефон",
          registerKey: "receiver.phone",
          patternOnInput: onlyNumbersRegex
        }
      ],
      key: "form-receiver-part"
    },
    {
      type: "inputs",
      title: "Отправитель",
      fields: [
        {
          labelText: "Фамилия",
          placeholder: "Фамилия",
          registerKey: "sender.lastname"
        },
        {
          labelText: "Имя",
          placeholder: "Имя",
          registerKey: "sender.firstname"
        },
        {
          labelText: "Отчество",
          placeholder: "Отчество (при наличии)",
          registerKey: "sender.middlename"
        },
        {
          labelText: "Номер телефона",
          placeholder: "Телефон",
          registerKey: "sender.phone"
        }
      ],
      key: "form-sender-part"
    },
    {
      type: "inputs",
      title: "Откуда забрать",
      fields: [
        {
          labelText: "Улица",
          placeholder: "Улица",
          registerKey: "senderAddress.street",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Номер дома",
          placeholder: "Дом",
          registerKey: "senderAddress.house",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Номер квартиры",
          placeholder: "Квартира",
          registerKey: "senderAddress.apartment",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Заметка",
          placeholder: "Заметка для курьера",
          registerKey: "senderAddress.comment"
        }
      ],
      key: "form-sender-address-part"
    },
    {
      type: "inputs",
      title: "Куда доставить",
      fields: [
        {
          labelText: "Улица",
          placeholder: "Улица",
          registerKey: "receiverAddress.street",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Номер дома",
          placeholder: "Дом",
          registerKey: "receiverAddress.house",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Номер квартиры",
          placeholder: "Квартира",
          registerKey: "receiverAddress.apartment",
          patternOnInput: streetFieldRegex
        },
        {
          labelText: "Заметка",
          placeholder: "Заметка для курьера",
          registerKey: "receiverAddress.comment"
        }
      ],
      key: "form-receiver-address-part"
    },
    {
      type: "radio",
      title: "Оплата доставки",
      items: [
        { label: "Отправитель", value: Payer.Sender },
        { label: "Получатель", value: Payer.Receiver }
      ],
      registerKey: "payer",
      key: "form-payer-part"
    },
    {
      type: "result",
      title: "Проверка данных заказа",
      blocks: [
        {
          title: "Получатель",
          items: [
            {
              subtitle: "ФИО",
              value: `${receiver?.lastname} ${receiver?.firstname} ${receiver?.middlename ?? ""}`
            },
            {
              subtitle: "Телефон",
              value: receiver?.phone
            }
          ],
          formStep: 2
        },
        {
          title: "Отправитель",
          items: [
            {
              subtitle: "ФИО",
              value: `${sender?.lastname} ${sender?.firstname} ${sender?.middlename ?? ""}`
            },
            {
              subtitle: "Телефон",
              value: sender?.phone
            }
          ],
          formStep: 3
        },
        {
          title: "Откуда забрать",
          items: [
            {
              subtitle: "Адрес",
              value: `${senderAddress?.street}, д. ${senderAddress?.house}`
            },
            {
              subtitle: "Заметка",
              value: senderAddress?.comment ?? ""
            }
          ],
          formStep: 4
        },
        {
          title: "Куда доставить",
          items: [
            {
              subtitle: "Адрес",
              value: `${receiverAddress?.street}, д. ${receiverAddress?.house}`
            },
            {
              subtitle: "Заметка",
              value: receiverAddress?.comment ?? ""
            }
          ],
          formStep: 5
        }
      ],
      key: "form-result-part"
    }
  ];

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
    screens,
    form,
    onFormSubmit: form.handleSubmit(onSubmit),
    onResultDialogClose: () => onResultDialogClose(PagePaths.HOME),
    onResultDialogSubmit: () => onResultDialogClose(PagePaths.DELIVERIES_HISTORY)
  };
};

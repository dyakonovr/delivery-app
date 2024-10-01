import { FormProvider } from "react-hook-form";
import { useCreateDeliveryPage } from "../hooks/useCreateDeliveryPage";
import { MultistepForm } from "./MultistepForm/MultistepForm.tsx";
import classes from "./styles.module.css";
import type { MultistepFormScreens } from "./MultistepForm/MultistepForm.tsx";
import { Container } from "@/shared/ui";
import { Payer } from "@/shared/api";

export function CreateDeliveryPage() {
  const {
    isResultDialogShowed,
    deliveryOptions,
    form,
    onFormSubmit,
    onResultDialogSubmit,
    onResultDialogClose
  } = useCreateDeliveryPage();

  const { sender, senderAddress, receiverAddress, receiver } = form.getValues();

  const screens: MultistepFormScreens = [
    {
      type: "options",
      title: "Способ доставки",
      options: deliveryOptions,
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
          registerKey: "receiver.lastname"
        },
        {
          labelText: "Имя",
          placeholder: "Имя",
          registerKey: "receiver.firstname"
        },
        {
          labelText: "Отчество",
          placeholder: "Отчество (при наличии)",
          registerKey: "receiver.middlename"
        },
        {
          labelText: "Номер телефона",
          placeholder: "Телефон",
          registerKey: "receiver.phone"
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
          registerKey: "senderAddress.street"
        },
        {
          labelText: "Номер дома",
          placeholder: "Дом",
          registerKey: "senderAddress.house"
        },
        {
          labelText: "Номер квартиры",
          placeholder: "Квартира",
          registerKey: "senderAddress.apartment"
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
          registerKey: "receiverAddress.street"
        },
        {
          labelText: "Номер дома",
          placeholder: "Дом",
          registerKey: "receiverAddress.house"
        },
        {
          labelText: "Номер квартиры",
          placeholder: "Квартира",
          registerKey: "receiverAddress.apartment"
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
              value: `${receiver?.lastname} ${receiver?.firstname} ${receiver?.middlename}`
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
              value: `${sender?.lastname} ${sender?.firstname} ${sender?.middlename}`
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

  return (
    <Container className="default-page-vertical-offsets">
      <form className={classes["create_delivery_form"]}>
        <FormProvider {...form}>
          <MultistepForm
            screens={screens}
            submitForm={onFormSubmit}
            isDialogShowed={isResultDialogShowed}
            onDialogSubmit={onResultDialogSubmit}
            onDialogClose={onResultDialogClose}
          />
        </FormProvider>
      </form>
    </Container>
  );
}

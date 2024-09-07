import { useFormContext } from "react-hook-form";
import { ResultPartItem } from "./PartItem";
import classes from "./styles.module.css";
import type { CreateDeliveryFormSchema } from "@/pages/create-delivery/model";
import { Typography, Dialog } from "@/shared/ui";
import {
  formatDeliveryPrice,
  formatDeliveryTime,
  useCreateDeliveryStore
} from "@/entities/delivery";

interface Props {
  isDialogShowed: boolean;
  onDialogClose?: () => void;
  onDialogSubmit?: () => void;
}

export function CreateDeliveryPageResultPart({
  isDialogShowed,
  onDialogSubmit,
  onDialogClose
}: Props) {
  const { getValues } = useFormContext<CreateDeliveryFormSchema>();

  const optionTypeId = getValues("optionTypeId");
  const receiver = getValues("receiver");
  const sender = getValues("sender");
  const senderAddress = getValues("senderAddress");
  const receiverAddress = getValues("receiverAddress");

  const { options } = useCreateDeliveryStore();
  const option = options?.find((item) => item.id === optionTypeId);
  if (!options || !option) return;

  return (
    <>
      <div className={classes["result_part"]}>
        <Typography variant="title">Проверка данных заказа</Typography>

        <ResultPartItem
          title="Получатель"
          items={[
            {
              subtitle: "ФИО",
              value: `${receiver.lastname} ${receiver.firstname} ${receiver.middlename}`
            },
            {
              subtitle: "Телефон",
              value: receiver.phone
            }
          ]}
          formStep={2}
        />

        <ResultPartItem
          title="Отправитель"
          items={[
            {
              subtitle: "ФИО",
              value: `${sender.lastname} ${sender.firstname} ${sender.middlename}`
            },
            {
              subtitle: "Телефон",
              value: sender.phone
            }
          ]}
          formStep={3}
        />

        <ResultPartItem
          title="Откуда забрать"
          items={[
            {
              subtitle: "Адрес",
              value: `${senderAddress.street}, д. ${senderAddress.house}`
            },
            {
              subtitle: "Заметка",
              value: senderAddress.comment ?? ""
            }
          ]}
          formStep={4}
        />

        <ResultPartItem
          title="Куда доставить"
          items={[
            {
              subtitle: "Адрес",
              value: `${receiverAddress.street}, д. ${receiverAddress.house}`
            },
            {
              subtitle: "Заметка",
              value: receiverAddress.comment ?? ""
            }
          ]}
          formStep={5}
        />

        <div>
          <Typography variant="title">
            Итого: {formatDeliveryPrice(option.price)} &#8381;
          </Typography>
          <Typography variant="regular">
            Тариф:{" "}
            <Typography
              variant="regular"
              tag="p"
              className="first-letter-big"
              style={{ display: "inline-block" }}
            >
              {option.name}
            </Typography>
          </Typography>
          <Typography variant="regular">
            Срок: {formatDeliveryTime(option.days)}
          </Typography>
        </div>
      </div>

      <Dialog
        title="Заявка отправлена"
        description="Вы можете оплатить ваш заказ в разделе «Профиль»"
        buttonText="Посмотреть статус"
        isOpened={isDialogShowed}
        onButtonClick={onDialogSubmit}
        onCloseClick={onDialogClose}
      />
    </>
  );
}

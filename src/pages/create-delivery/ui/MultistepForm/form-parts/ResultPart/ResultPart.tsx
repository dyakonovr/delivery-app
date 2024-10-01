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
  title: string;
  blocks: {
    title: string;
    items: {
      subtitle: string;
      value: string;
    }[];
    formStep: number;
  }[];
  isDialogShowed: boolean;
  onDialogClose?: () => void;
  onDialogSubmit?: () => void;
}

export function MultistepFormResultPart({
  title,
  blocks,
  isDialogShowed,
  onDialogSubmit,
  onDialogClose
}: Props) {
  const { getValues } = useFormContext<CreateDeliveryFormSchema>();

  const optionTypeId = getValues("optionTypeId");

  const { options } = useCreateDeliveryStore();
  const option = options?.find((item) => item.id === optionTypeId);
  if (!options || !option) return;

  return (
    <>
      <div className={classes["result_part"]}>
        <Typography variant="title">{title}</Typography>

        {blocks.map((block) => (
          <ResultPartItem {...block} key={block.title + block.formStep} />
        ))}

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

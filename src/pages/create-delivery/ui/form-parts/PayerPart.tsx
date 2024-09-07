import { useFormContext } from "react-hook-form";
import classes from "../styles.module.css";
import type { CreateDeliveryFormSchema } from "../../model";
import { RadioButton, Typography } from "@/shared/ui";
import { Payer } from "@/shared/api";

export function CreateDeliveryPagePayerPart() {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">Оплата доставки</Typography>
      <RadioButton label="Отправитель" value={Payer.Sender} {...register("payer")} />
      <RadioButton label="Получатель" value={Payer.Receiver} {...register("payer")} />
    </div>
  );
}

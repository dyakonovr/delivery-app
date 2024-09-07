import { useFormContext } from "react-hook-form";
import classes from "../styles.module.css";
import type { CreateDeliveryFormSchema } from "../../model/create-delivery-form-schema";
import { Input, Typography } from "@/shared/ui";

export function CreateDeliveryPageSenderAddressPart() {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">Откуда забрать</Typography>

      <Input
        labelText="Улица"
        placeholder="Улица"
        errorMessage={errors.senderAddress?.street?.message}
        key="senderAddress.street"
        {...register("senderAddress.street")}
      />
      <Input
        labelText="Номер дома"
        placeholder="Дом"
        errorMessage={errors.senderAddress?.house?.message}
        key="senderAddress.house"
        {...register("senderAddress.house")}
      />
      <Input
        labelText="Номер квартиры"
        placeholder="Квартира"
        errorMessage={errors.senderAddress?.apartment?.message}
        key="senderAddress.apartment"
        {...register("senderAddress.apartment")}
      />
      <Input
        labelText="Заметка"
        placeholder="Заметка для курьера"
        errorMessage={errors.senderAddress?.comment?.message}
        key="senderAddress.comment"
        {...register("senderAddress.comment")}
      />
    </div>
  );
}

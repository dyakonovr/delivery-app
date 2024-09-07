import { useFormContext } from "react-hook-form";
import classes from "../styles.module.css";
import type { CreateDeliveryFormSchema } from "../../model/create-delivery-form-schema";
import { Input, Typography } from "@/shared/ui";

export function CreateDeliveryPageReceiverAddressPart() {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">Куда доставить</Typography>

      <Input
        labelText="Улица"
        placeholder="Улица"
        errorMessage={errors.receiverAddress?.street?.message}
        key="receiverAddress.street"
        {...register("receiverAddress.street")}
      />
      <Input
        labelText="Номер дома"
        placeholder="Дом"
        errorMessage={errors.receiverAddress?.house?.message}
        key="receiverAddress.house"
        {...register("receiverAddress.house")}
      />
      <Input
        labelText="Номер квартиры"
        placeholder="Квартира"
        errorMessage={errors.receiverAddress?.apartment?.message}
        key="receiverAddress.apartment"
        {...register("receiverAddress.apartment")}
      />
      <Input
        labelText="Заметка"
        placeholder="Заметка для курьера"
        errorMessage={errors.receiverAddress?.comment?.message}
        key="receiverAddress.comment"
        {...register("receiverAddress.comment")}
      />
    </div>
  );
}

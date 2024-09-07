import { useFormContext } from "react-hook-form";
import classes from "../styles.module.css";
import type { CreateDeliveryFormSchema } from "../../model/create-delivery-form-schema";
import { Input, Typography } from "@/shared/ui";

export function CreateDeliveryPageSenderPart() {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">Отправитель</Typography>

      <Input
        labelText="Фамилия"
        placeholder="Фамилия"
        errorMessage={errors.sender?.lastname?.message}
        key="sender.lastname"
        {...register("sender.lastname")}
      />
      <Input
        labelText="Имя"
        placeholder="Имя"
        errorMessage={errors.sender?.firstname?.message}
        key="sender.firstname"
        {...register("sender.firstname")}
      />
      <Input
        labelText="Отчество"
        placeholder="Отчество (при наличии)"
        errorMessage={errors.sender?.middlename?.message}
        key="sender.middlename"
        {...register("sender.middlename")}
      />
      <Input
        labelText="Номер телефона"
        placeholder="Телефон"
        errorMessage={errors.sender?.phone?.message}
        key="sender.phone"
        {...register("sender.phone")}
      />
    </div>
  );
}

import classes from "../styles.module.css";
import { useFormContext } from "react-hook-form";
import type { CreateDeliveryFormSchema } from "../../model/create-delivery-form-schema";
import { Input, Typography } from "@/shared/ui";

export function CreateDeliveryPageReceiverPart() {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">Получатель</Typography>

      <Input
        labelText="Фамилия"
        placeholder="Фамилия"
        errorMessage={errors.receiver?.lastname?.message}
        key="receiver.lastname"
        {...register("receiver.lastname")}
      />
      <Input
        labelText="Имя"
        placeholder="Имя"
        errorMessage={errors.receiver?.firstname?.message}
        key="receiver.firstname"
        {...register("receiver.firstname")}
      />
      <Input
        labelText="Отчество"
        placeholder="Отчество (при наличии)"
        errorMessage={errors.receiver?.middlename?.message}
        key="receiver.middlename"
        {...register("receiver.middlename")}
      />
      <Input
        labelText="Номер телефона"
        placeholder="Телефон"
        errorMessage={errors.receiver?.phone?.message}
        key="receiver.phone"
        {...register("receiver.phone")}
      />
    </div>
  );
}

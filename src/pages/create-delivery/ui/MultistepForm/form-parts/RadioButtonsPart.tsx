import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import classes from "../../styles.module.css";
import type { CreateDeliveryFormFields, CreateDeliveryFormSchema } from "../../../model";
import { RadioButton, Typography } from "@/shared/ui";

interface Props {
  title: string;
  registerKey: CreateDeliveryFormFields;
  items: {
    label: string;
    value: string;
  }[];
}

export function MultistepFormRadioButtonsPart({ title, items, registerKey }: Props) {
  const {
    register,
    formState: { errors }
  } = useFormContext<CreateDeliveryFormSchema>();

  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title">{title}</Typography>
      {items.map((item) => (
        <RadioButton
          label={item.label}
          value={item.value}
          {...register(registerKey)}
          key={item.label}
        />
      ))}

      <ErrorMessage
        name={registerKey}
        errors={errors}
        render={({ message }) => (
          <Typography variant="regular" tag="p" className="error-message">
            {message}
          </Typography>
        )}
      />
    </div>
  );
}

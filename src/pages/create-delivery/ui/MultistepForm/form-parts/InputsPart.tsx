import { Controller } from "react-hook-form";
import classes from "../../styles.module.css";
import type { CreateDeliveryFormFields } from "../../../model";
import { Input, Typography } from "@/shared/ui";

interface Props {
  title: string;
  fields: {
    labelText: string;
    placeholder: string;
    registerKey: CreateDeliveryFormFields;
  }[];
}

export function MultistepFormInputsPart({ title, fields }: Props) {
  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title" tag="p">
        {title}
      </Typography>

      {fields.map((input) => (
        <Controller
          name={input.registerKey}
          key={input.registerKey}
          render={({ field, fieldState }) => (
            <Input
              labelText={input.labelText}
              placeholder={input.placeholder}
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />
      ))}
    </div>
  );
}

import { Controller } from "react-hook-form";
import classes from "../../styles.module.css";
import type { ComponentProps } from "react";
import type { CreateDeliveryFormFields } from "../../../model";
import { Input, Typography } from "@/shared/ui";

export type MultistepFormInputField = ComponentProps<typeof Input> & {
  registerKey: CreateDeliveryFormFields;
};

interface Props {
  title: string;
  fields: MultistepFormInputField[];
}

export function MultistepFormInputsPart({ title, fields }: Props) {
  return (
    <div
      className={`${classes["create_delivery_form_wrapper"]} ${classes["create_delivery_form_fields_container"]}`}
    >
      <Typography variant="title" tag="p">
        {title}
      </Typography>

      {fields.map(({ registerKey, ...restProps }) => (
        <Controller
          name={registerKey}
          key={registerKey}
          render={({ field, fieldState }) => (
            <Input errorMessage={fieldState.error?.message} {...restProps} {...field} />
          )}
        />
      ))}
    </div>
  );
}

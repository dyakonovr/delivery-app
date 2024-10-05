import { Controller } from "react-hook-form";
import classes from "../../styles.module.css";
import type { ComponentProps } from "react";
import type { CreateDeliveryFormFields } from "../../../model";
import { Input, Typography } from "@/shared/ui";

export type MultistepFormInputField = {
  labelText: string;
  placeholder: string;
  registerKey: CreateDeliveryFormFields;
  patternOnInput?: ComponentProps<typeof Input>["patternOnInput"];
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

      {fields.map((input) => (
        <Controller
          name={input.registerKey}
          key={input.registerKey}
          render={({ field, fieldState }) => (
            <Input
              labelText={input.labelText}
              placeholder={input.placeholder}
              errorMessage={fieldState.error?.message}
              patternOnInput={input.patternOnInput}
              {...field}
            />
          )}
        />
      ))}
    </div>
  );
}

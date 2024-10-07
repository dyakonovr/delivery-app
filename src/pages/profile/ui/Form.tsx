import { Controller } from "react-hook-form";
import { useProfilePageForm } from "../hooks";
import classes from "./styles.module.css";
import type { ProfileFormKeys } from "../model";
import type { ComponentProps } from "react";
import { Button, Input } from "@/shared/ui";

export type ProfilePageFormField = {
  name: ProfileFormKeys;
  inputProps: ComponentProps<typeof Input>;
};

export function ProfilePageForm() {
  const { fields, control, onSubmitFx } = useProfilePageForm();

  return (
    <form className={classes["profile_page_form"]} onSubmit={onSubmitFx}>
      <div className={classes["profile_page_form_wrapper"]}>
        {fields.map((column, index) => (
          <div className={classes["profile_page_form_column"]} key={index}>
            {column.map((item) => (
              <Controller
                control={control}
                render={({ field }) => <Input {...item.inputProps} {...field} />}
                name={item.name}
                key={item.name}
              />
            ))}
          </div>
        ))}
      </div>
      <Button
        variant={"contained"}
        color={"primary"}
        className={classes["profile_page_form_button"]}
        type={"submit"}
      >
        Обновить данные
      </Button>
    </form>
  );
}

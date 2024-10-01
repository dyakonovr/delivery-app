import { useFormContext } from "react-hook-form";
import formClasses from "../../../styles.module.css";
import classes from "./styles.module.css";
import { CreateDeliveryFormOptionItem } from "./OptionItem";
import type { CalculateDeliveryOptions } from "@/shared/api";
import type {
  CreateDeliveryFormFields,
  CreateDeliveryFormSchema
} from "@/pages/create-delivery/model";
import { Typography } from "@/shared/ui";
import { useMultistepFormContext } from "@/pages/create-delivery/model";

interface Props {
  title: string;
  registerKey: CreateDeliveryFormFields;
  options: CalculateDeliveryOptions;
}

export function CreateDeliveryPageOptionPart({ title, registerKey, options }: Props) {
  const { setValue } = useFormContext<CreateDeliveryFormSchema>();
  const { setStep } = useMultistepFormContext();

  // Functions
  function optionClickFx(optionId: string) {
    setValue(registerKey, optionId);
    setStep((v) => v + 1);
  }
  // Functions END

  return (
    <div className={formClasses["create_delivery_form_wrapper"]}>
      <Typography variant="title">{title}</Typography>
      <div className={classes["create_delivery_form_option_wrapper"]}>
        {options.map((option) => (
          <CreateDeliveryFormOptionItem
            title={option.name}
            price={option.price}
            daysCount={option.days}
            type={option.type}
            key={option.name}
            onClick={() => optionClickFx(option.id)}
          />
        ))}
      </div>
    </div>
  );
}

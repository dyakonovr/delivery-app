import { useFormContext } from "react-hook-form";
import classes from "../../styles.module.css";
import { useMultistepFormContext } from "../../../model";
import { CreateDeliveryFormOptionItem } from "./OptionItem";
import type { CreateDeliveryFormSchema } from "../../../model/create-delivery-form-schema";
import type { CalculateDeliveryOptions } from "@/shared/api";
import { Typography } from "@/shared/ui";

interface Props {
  options: CalculateDeliveryOptions;
}

export function CreateDeliveryPageOptionPart({ options }: Props) {
  const { setValue } = useFormContext<CreateDeliveryFormSchema>();
  const { setStep } = useMultistepFormContext();

  // Functions
  function optionClickFx(optionId: string) {
    setValue("optionTypeId", optionId);
    setStep((v) => v + 1);
  }
  // Functions END

  return (
    <div className={classes["create_delivery_form_wrapper"]}>
      <Typography variant="title">Способ доставки</Typography>
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

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { type CreateDeliveryFormSchema, MultistepFormContext } from "../../model";
import classes from "../styles.module.css";
import {
  CreateDeliveryPageOptionPart,
  MultistepFormInputsPart,
  MultistepFormRadioButtonsPart,
  MultistepFormResultPart
} from "./form-parts";
import type { MultistepFormInputField } from "./form-parts";
import type { CreateDeliveryFormFields } from "../../model";
import type { CalculateDeliveryOptions } from "@/shared/api";
import { Button } from "@/shared/ui";

type InputsPartProps = {
  type: "inputs";
  title: string;
  fields: MultistepFormInputField[];
  key: string;
};

type OptionsPartProps = {
  type: "options";
  title: string;
  registerKey: CreateDeliveryFormFields;
  options: CalculateDeliveryOptions;
  key: string;
};

type RadioButtonsPartProps = {
  type: "radio";
  title: string;
  items: {
    label: string;
    value: string;
  }[];
  registerKey: CreateDeliveryFormFields;
  key: string;
};

type ResultPartProps = {
  type: "result";
  title: string;
  blocks: {
    title: string;
    items: {
      subtitle: string;
      value: string;
    }[];
    formStep: number;
  }[];
  key: string;
};

export type MultistepFormScreens = (
  | InputsPartProps
  | OptionsPartProps
  | RadioButtonsPartProps
  | ResultPartProps
)[];

export type MultistepFormProps = {
  screens: MultistepFormScreens;
  submitForm: () => void;
  isDialogShowed: boolean;
  onDialogClose?: () => void;
  onDialogSubmit?: () => void;
};

export function MultistepForm({
  screens,
  submitForm,
  onDialogSubmit,
  onDialogClose,
  isDialogShowed
}: MultistepFormProps) {
  const minStep = 1;
  const maxStep = screens.length;
  const [step, setStep] = useState(minStep);

  const { trigger } = useFormContext<CreateDeliveryFormSchema>();

  const screen = screens[step - 1];

  // Functions
  function prevButtonClick() {
    setStep((v) => Math.max(minStep, v - 1));
  }

  async function nextButtonClick() {
    if (screen.type === "options") return;
    if (screen.type === "result") return submitForm();

    const fields =
      screen.type === "inputs"
        ? screen.fields.map((el) => el.registerKey)
        : screen.registerKey;

    const formStepIsValid = await trigger(fields, {
      shouldFocus: true
    });

    if (!formStepIsValid) return;
    setStep(step + 1);
  }
  // Functions END

  return (
    <MultistepFormContext.Provider value={{ step, setStep }}>
      {screen.type === "options" && (
        <CreateDeliveryPageOptionPart
          title={screen.title}
          options={screen.options}
          registerKey={screen.registerKey}
          key={screen.key}
        />
      )}

      {screen.type === "inputs" && (
        <MultistepFormInputsPart
          title={screen.title}
          fields={screen.fields}
          key={screen.key}
        />
      )}

      {screen.type === "radio" && (
        <MultistepFormRadioButtonsPart
          title={screen.title}
          items={screen.items}
          registerKey={screen.registerKey}
          key={screen.key}
        />
      )}

      {screen.type === "result" && (
        <MultistepFormResultPart
          title={screen.title}
          blocks={screen.blocks}
          isDialogShowed={isDialogShowed}
          onDialogClose={onDialogClose}
          onDialogSubmit={onDialogSubmit}
          key={screen.key}
        />
      )}

      <div className={classes["create_delivery_buttons_wrapper"]}>
        {step != minStep && (
          <Button
            variant="contained"
            color="secondary"
            className={classes["create_delivery_button"]}
            onClick={prevButtonClick}
          >
            Назад
          </Button>
        )}
        {screen.type !== "options" && (
          <Button
            variant="contained"
            color="primary"
            className={classes["create_delivery_button"]}
            type="button"
            onClick={nextButtonClick}
          >
            {step !== maxStep ? "Продолжить" : "Отправить"}
          </Button>
        )}
      </div>
    </MultistepFormContext.Provider>
  );
}

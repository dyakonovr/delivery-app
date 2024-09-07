import { useState } from "react";
import { MultistepFormContext } from "../model";
import classes from "./styles.module.css";
import { Button } from "@/shared/ui";

interface Props {
  screens: JSX.Element[];
  submitForm: () => void;
}

export function MultistepForm({ screens, submitForm }: Props) {
  const minStep = 1;
  const maxStep = screens.length;
  const [step, setStep] = useState(minStep);

  // Functions
  function prevButtonClick() {
    setStep((v) => Math.max(minStep, v - 1));
  }

  function nextButtonClick() {
    const newValue = step + 1;

    if (newValue <= maxStep) return setStep(newValue);
    submitForm();
  }
  // Functions END

  return (
    <MultistepFormContext.Provider value={{ step, setStep }}>
      {screens[step - 1]}
      <div className={classes["create_delivery_buttons_wrapper"]}>
        {step !== minStep && (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes["create_delivery_button"]}
              onClick={prevButtonClick}
            >
              Назад
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes["create_delivery_button"]}
              type="button"
              onClick={nextButtonClick}
            >
              {step !== maxStep ? "Продолжить" : "Отправить"}
            </Button>
          </>
        )}
      </div>
    </MultistepFormContext.Provider>
  );
}

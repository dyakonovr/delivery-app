import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

interface MultistepFormContextProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export const MultistepFormContext = createContext<MultistepFormContextProps | null>(null);

export const useMultistepFormContext = () => {
  const context = useContext(MultistepFormContext);
  if (!context) {
    throw new Error(
      "useMultistepFormContext must be used within a MultistepFormProvider"
    );
  }

  return context;
};

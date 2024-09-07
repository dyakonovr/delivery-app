import { forwardRef } from "react";
import { Check } from "lucide-react";
import { Typography } from "../typography";
import classes from "./styles.module.css";
import type { ChangeEvent } from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, name, value, checked, onChange, disabled = false, className = "" }, ref) => {
    return (
      <label className={`${classes["radio-button"]} ${className}`}>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={classes["radio-input"]}
        />
        <span className={classes["radio-custom"]}>
          <Check className={classes["radio-custom-icon"]} />{" "}
        </span>
        <Typography variant="regular">{label}</Typography>
      </label>
    );
  }
);

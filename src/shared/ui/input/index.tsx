import { forwardRef } from "react";
import { Typography } from "../typography";
import classes from "./styles.module.css";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  labelText?: string;
  hintMessageText?: string;
  errorMessage?: string;
  rootClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { labelText, hintMessageText, errorMessage, rootClassName = "", className, ...props },
    ref
  ) => {
    const isError = !!errorMessage;

    return (
      <div className={`${classes["input_wrapper"]} ${rootClassName}`}>
        {labelText && (
          <Typography variant="small" tag="label" className={classes["label"]}>
            {labelText}
          </Typography>
        )}

        <input
          ref={ref}
          type="text"
          className={`${classes["input"]} ${isError && classes["error"]} ${className}`}
          placeholder="Search"
          {...props}
        />

        {hintMessageText && (
          <Typography variant="small" tag="p" className={classes["hint_message"]}>
            {hintMessageText}
          </Typography>
        )}

        {errorMessage && (
          <Typography variant="small" tag="p" className={classes["error_message"]}>
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);

import { forwardRef, useState } from "react";
import { Typography } from "../typography/Typography";
import classes from "./styles.module.css";
import type { ChangeEvent, ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
  labelText?: string;
  hintMessageText?: string;
  errorMessage?: string;
  rootClassName?: string;

  patternOnInput?: RegExp;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      labelText,
      hintMessageText,
      errorMessage,
      rootClassName = "",
      className,
      patternOnInput,
      ...props
    },
    ref
  ) => {
    const isError = !!errorMessage;
    const placeholder =
      labelText && !props.placeholder ? labelText : (props.placeholder ?? "");
    const [value, setValue] = useState<string | number | readonly string[]>(
      props.value ?? ""
    );

    // Functions
    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
      const input = event.target as HTMLInputElement;
      if (!!patternOnInput && input.value !== "" && !patternOnInput.test(input.value)) {
        return setValue(value);
      }

      setValue(input.value);

      if (props.onChange) {
        props.onChange(event);
      }
    }
    // Functions END

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
          placeholder={placeholder}
          {...props}
          onChange={onChangeHandler}
          value={value}
        />

        {hintMessageText && (
          <Typography variant="small" tag="p" className={classes["hint_message"]}>
            {hintMessageText}
          </Typography>
        )}

        {errorMessage && (
          <Typography
            variant="small"
            tag="p"
            className={`error-message ${classes["error_message"]}`}
          >
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  }
);

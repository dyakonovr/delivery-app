import { useState, useRef, useEffect, forwardRef } from "react";
import { Typography } from "../typography";
import classes from "./styles.module.css";
import type { ComponentProps } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

interface Props extends ComponentProps<"select"> {
  options: SelectOption[];
  placeholder?: string;
  icon?: JSX.Element;
  labelText?: string;
  errorMessage?: string;
  onChangeFx?: (option: SelectOption) => void;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  (
    {
      options,
      placeholder = "Select an option",
      labelText = "",
      errorMessage = "",
      icon,
      onChangeFx,
      ...props
    },
    ref
  ) => {
    const [originalSelectValue, setOriginalSelectValue] = useState<
      string | number | readonly string[] | undefined
    >(props.value || undefined);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);

    const selectRef = useRef<HTMLDivElement | null>(null);
    const hiddenSelectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Functions
    function handleSelectOption(option: SelectOption) {
      setSelectedOption(option);
      setIsOpen(false);
      setOriginalSelectValue(option.value);

      // If you don't do focus(), then, for example,
      // react-hook-form doesn't change the value in <select>
      if (hiddenSelectRef.current) hiddenSelectRef.current.focus();
      if (onChangeFx) onChangeFx(option);
    }
    // Functions END

    return (
      <>
        <select
          className="visually-hidden"
          value={originalSelectValue}
          ref={(el) => {
            hiddenSelectRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref && el)
              (ref as React.MutableRefObject<HTMLSelectElement>).current = el;
          }}
          {...props}
        >
          <option></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className={classes["select"]} ref={selectRef}>
          {labelText && (
            <Typography variant="small" className={classes["select_label"]} tag="p">
              {labelText}
            </Typography>
          )}

          <div className={classes["select__trigger"]} onClick={() => setIsOpen(!isOpen)}>
            <Typography
              variant="regular"
              className={classes["select_placeholder"]}
              tag="p"
            >
              {icon && <span className={classes["select_icon"]}>{icon}</span>}{" "}
              {selectedOption ? selectedOption.label : placeholder}
            </Typography>
            <span className={`${classes["arrow"]} ${isOpen ? classes["open"] : ""}`} />
          </div>
          {isOpen && (
            <ul className={classes["select__options"]}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={classes["select__option"]}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}

          {errorMessage && (
            <Typography variant="small" tag="p" className={classes["error_message"]}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </>
    );
  }
);

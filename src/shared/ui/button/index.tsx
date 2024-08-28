import { forwardRef, type ComponentProps, type ReactNode } from "react";
import classes from "./styles.module.css";

type ButtonVariant = "text" | "contained" | "link";
type ButtonColor = "primary" | "secondary";

interface Props extends ComponentProps<"button"> {
  variant: ButtonVariant;
  color: ButtonColor;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant, color, className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={`${classes["button"]} ${classes[`variant_${variant}`]} ${classes[`color_${color}`]} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

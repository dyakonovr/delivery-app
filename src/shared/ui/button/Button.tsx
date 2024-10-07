import { forwardRef, type ComponentProps, type ReactNode } from "react";
import classes from "./styles.module.css";

type ButtonVariant = "text" | "contained" | "link";
type ButtonColor = "primary" | "secondary";

interface DefaultButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

interface ColorfulButton extends DefaultButtonProps {
  variant: ButtonVariant;
  color: ButtonColor;
}

interface TransparentButton extends DefaultButtonProps {
  transparent: true;
}

type Props = ColorfulButton | TransparentButton;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    if ("transparent" in props) {
      return (
        <button className={`${classes["button"]} ${className}`} {...props}>
          {children}
        </button>
      );
    }

    return (
      <button
        type="button"
        className={`${classes["button"]} ${classes[`variant_${props.variant}`]} ${classes[`color_${props.color}`]} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

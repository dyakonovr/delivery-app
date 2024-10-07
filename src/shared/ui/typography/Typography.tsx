import classes from "./styles.module.css";
import type { HTMLAttributes, ReactNode } from "react";

type Tag = "div" | "span" | "h1" | "h2" | "p" | "label";
type Variant = "title" | "regular" | "small" | "extra-small";

interface Props extends HTMLAttributes<HTMLElement> {
  tag?: Tag;
  /**
   * title = 24px / regular = 16px / small = 14px / extra-small = 12px
   */
  variant: Variant;

  children: ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  tag = "div",
  className,
  children,
  ...props
}: Props) => {
  const Component = variant === "title" ? "h1" : tag;

  return (
    <Component
      className={`${classes["typography"]} ${classes[`variant_${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// title: 24px, weight 700
// regular: 16px, weight 400
//  14px, weight 400
// 12px, weight 400

import classes from "./styles.module.css";
import type { HTMLAttributes, ReactNode } from "react";

type Tag = "div" | "span" | "h1" | "h2" | "p" | "label";
type Variant = "title" | "regular" | "small" | "extra-small";
// type FontSizeVariant = "24px" | "16px" | "14px" | "12px";
// type FontWeightVariant = "700" | "500" | "400";

interface Props extends HTMLAttributes<HTMLElement> {
  // size: FontSizeVariant;
  // weight: FontWeightVariant;
  tag?: Tag;
  /**
   * title = 24px / regular = 16px / small = 14px / extra-small = 12px
   */
  variant: Variant;

  children: ReactNode;
  className?: string;
}

export const Typography = ({
  // size,
  // weight,
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

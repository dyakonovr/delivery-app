import { ComponentProps } from "react";
import classes from "./styles.module.css";

type Props = ComponentProps<"div">;

export function Container({ className, children, ...props }: Props) {
  return (
    <div className={`${classes["container"]} ${className}`} {...props}>
      {children}
    </div>
  );
}

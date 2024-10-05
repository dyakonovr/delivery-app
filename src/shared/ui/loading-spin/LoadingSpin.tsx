import { Loader2 as LoaderIcon } from "lucide-react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export function LoadingSpin({ className, ...props }: Props) {
  return <LoaderIcon className={`spin-animation ${className}`} {...props} />;
}

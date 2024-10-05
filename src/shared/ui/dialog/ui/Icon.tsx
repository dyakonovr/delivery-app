/// <reference types="vite-plugin-svgr/client" />
import DoneIconSvg from "../assets/img/done-icon.svg?react";
import QuestionIconSvg from "../assets/img/question-icon.svg?react";
import type { ComponentProps } from "react";

export type DialogIconType = "success" | "question";
interface Props extends ComponentProps<"svg"> {
  icon?: DialogIconType;
}

export function DialogIcon({ icon, ...props }: Props) {
  switch (icon) {
    case "success":
      return <DoneIconSvg {...props} />;
    case "question":
      return <QuestionIconSvg {...props} />;
    default:
      return null;
  }
}

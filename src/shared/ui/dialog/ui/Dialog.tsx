/// <reference types="vite-plugin-svgr/client" />
import { X as CloseIcon } from "lucide-react";
import { createPortal } from "react-dom";
import DoneIconSvg from "../assets/img/done-icon.svg?react";
import { useDialog } from "../hooks/useDialog";
import classes from "./styles.module.css";
import { Button, Typography } from "@/shared/ui";

interface Props {
  dialogClassName?: string;
  title: string;
  description?: string;
  buttonText: string;

  isOpened: boolean;
  onButtonClick?: () => void;
  onCloseClick?: () => void;
}

export function Dialog({
  title,
  description,
  buttonText,
  dialogClassName = "",
  isOpened,
  onButtonClick,
  onCloseClick
}: Props) {
  const { isOpen, onCloseFx, onSubmitFx } = useDialog(
    isOpened,
    onButtonClick,
    onCloseClick
  );

  return createPortal(
    <div className={`${classes["dialog_wrapper"]} ${isOpen && classes["is_open"]}`}>
      <div className={`${classes["dialog"]} ${dialogClassName}`}>
        <button
          className={`btn-reset ${classes["dialog_close_btn"]}`}
          type="button"
          onClick={onCloseFx}
        >
          <CloseIcon className={classes["dialog_close_btn_icon"]} />
        </button>

        <DoneIconSvg />
        <Typography variant="title" className={classes["dialog_title"]}>
          {title}
        </Typography>
        {description && (
          <Typography variant="regular" className={classes["dialog_descr"]}>
            {description}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          className={classes["dialog_btn"]}
          onClick={onSubmitFx}
        >
          {buttonText}
        </Button>
      </div>
    </div>,
    document.body
  );
}

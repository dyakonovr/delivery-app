import { createPortal } from "react-dom";
import { X as CloseIcon } from "lucide-react";
import { useDialog } from "../hooks/useDialog";
import classes from "./styles.module.css";
import { DialogIcon } from "./Icon";
import type { DialogIconType } from "./Icon";
import { Button, Typography } from "@/shared/ui";

interface Props {
  dialogClassName?: string;
  icon?: DialogIconType;
  title: string;
  description?: string;
  footerButtons?: JSX.Element;

  isOpened: boolean;
  onCloseClick?: () => void;
}

export function Dialog({
  title,
  description,
  dialogClassName = "",
  isOpened,
  icon,
  footerButtons,
  onCloseClick
}: Props) {
  const { dialogRef, isOpen, onCloseFx } = useDialog(isOpened, onCloseClick);

  return createPortal(
    <div className={`${classes["dialog_wrapper"]} ${isOpen && classes["is_open"]}`}>
      <div className={`${classes["dialog"]} ${dialogClassName}`} ref={dialogRef}>
        <button
          className={`btn-reset ${classes["dialog_close_btn"]}`}
          type="button"
          onClick={onCloseFx}
        >
          <CloseIcon className={classes["dialog_close_btn_icon"]} />
        </button>

        <Button transparent>
          <DialogIcon icon={icon} />
        </Button>
        <Typography variant="title" className={classes["dialog_title"]}>
          {title}
        </Typography>
        {description && (
          <Typography variant="regular" className={classes["dialog_descr"]}>
            {description}
          </Typography>
        )}

        {footerButtons && (
          <div className={classes["dialog_buttons"]}>{footerButtons}</div>
        )}
      </div>
    </div>,
    document.body
  );
}

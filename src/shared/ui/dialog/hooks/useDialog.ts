import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import { useClickOutside } from "@/shared/hooks";

interface UseDialog {
  isOpen: boolean;
  dialogRef: MutableRefObject<HTMLDivElement | null>;
  onCloseFx: () => void;
}

export const useDialog = (isOpened: boolean, onClose?: () => void): UseDialog => {
  const [isOpen, setIsOpen] = useState(isOpened);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dialogRef, () => setIsOpen(false));

  useEffect(() => {
    setIsOpen(isOpened);
  }, [isOpened]);

  // Functions
  function onCloseFx() {
    try {
      setIsOpen(false);
      if (onClose) onClose();
    } catch (error) {
      console.error("Close dialog error:", error);
    }
  }
  // Functions END

  return {
    dialogRef,
    isOpen,
    onCloseFx
  };
};

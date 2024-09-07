import { useEffect, useState } from "react";

interface UseDialog {
  isOpen: boolean;
  onSubmitFx: () => void;
  onCloseFx: () => void;
}

export const useDialog = (
  isOpened: boolean,
  onSubmit?: () => void,
  onClose?: () => void
): UseDialog => {
  const [isOpen, setIsOpen] = useState(isOpened);

  useEffect(() => {
    setIsOpen(isOpened);
  }, [isOpened]);

  // Functions
  function onSubmitFx() {
    try {
      setIsOpen(false);
      if (onSubmit) onSubmit();
    } catch (error) {
      console.error("Click on submit button in dialog error:", error);
    }
  }

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
    isOpen,
    onCloseFx,
    onSubmitFx
  };
};

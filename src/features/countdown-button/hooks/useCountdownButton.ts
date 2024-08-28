import { useEffect } from "react";
import useCountDown from "@/shared/hooks/useCountdown";

interface Props {
  delayInMs: number;
  isEnabled: boolean;
  onClick: () => void;
}

export const useCountdownButton = ({ delayInMs, isEnabled, onClick }: Props) => {
  const [timeLeft, { start, reset }] = useCountDown(delayInMs);
  const value = timeLeft / 1000;

  useEffect(() => {
    if (delayInMs <= 0 || !isEnabled) return;
    start();
  }, [isEnabled]);

  // Functions
  function onClickFx() {
    onClick();
    reset();
    start();
  }
  // Functions END

  return { value, onClickFx };
};

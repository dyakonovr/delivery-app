import { useCountdownButton } from "../hooks/useCountdownButton";
import classes from "./styles.module.css";
import { Button } from "@/shared/ui";

interface Props {
  className?: string;
  delayInMs: number;
  isEnabled: boolean;
  onClick: () => void;
}

export function CountdownButton({
  className = "",
  delayInMs,
  isEnabled,
  onClick
}: Props) {
  const { value, onClickFx } = useCountdownButton({ delayInMs, isEnabled, onClick });
  const classNames = `${classes["countdown_button"]} ${value > 0 && classes["countdown_button_disabled"]} ${className}`;

  return (
    <Button variant="link" color="secondary" className={classNames} onClick={onClickFx}>
      {value <= 0 ? "Отправить ещё раз" : `Отправить код повторно через ${value} сек`}
    </Button>
  );
}

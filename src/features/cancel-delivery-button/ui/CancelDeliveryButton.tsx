import type { ComponentProps } from "react";
import { Button } from "@/shared/ui";
import { useCancelDeliveryOrderMutation } from "@/entities/delivery/api";
import { GRAPHQL_AUTHORIZATION_CONTEXT } from "@/shared/config";

type ButtonProps = Omit<ComponentProps<typeof Button>, "variant" | "color" | "onClick">;
interface Props extends ButtonProps {
  orderId: string;
  onClick?: () => void;
}

export function CancelDeliveryButton({ orderId, onClick, children, ...props }: Props) {
  const [cancelDelivery] = useCancelDeliveryOrderMutation({
    ...GRAPHQL_AUTHORIZATION_CONTEXT,
    variables: { orderId }
  });

  // Functions
  async function onClickFx() {
    try {
      await cancelDelivery();
      if (onClick) onClick();
    } catch (error) {
      console.error("Cancel delivery error:", error);
    }
  }
  // Functions END

  return (
    <Button variant={"contained"} color={"secondary"} onClick={onClickFx} {...props}>
      {children}
    </Button>
  );
}

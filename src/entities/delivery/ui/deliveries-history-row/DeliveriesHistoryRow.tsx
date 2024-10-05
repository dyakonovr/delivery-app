import { useNavigate } from "@tanstack/react-router";
import classes from "./styles.module.css";
import { DeliveriesHistoryRowStatus } from "./Status";
import type { DeliveryOrder } from "@/shared/api";
import { Button, Typography } from "@/shared/ui";
import { PagePaths } from "@/shared/config";

interface Props {
  deliveryId: DeliveryOrder["_id"];
  status: DeliveryOrder["status"];
  receiverAddress: DeliveryOrder["receiverAddress"]; // ???
}

export function DeliveriesHistoryRow({ deliveryId, status, receiverAddress }: Props) {
  const navigate = useNavigate();

  return (
    <div className={classes["delivery_row"]}>
      <div>
        <Typography
          variant="extra-small"
          tag="p"
          className={classes["delivery_row_subtitle"]}
        >
          Номер заказа
        </Typography>
        <Typography variant="regular">{deliveryId}</Typography>
      </div>
      <div>
        <Typography
          variant="extra-small"
          tag="p"
          className={classes["delivery_row_subtitle"]}
        >
          Статус
        </Typography>
        <DeliveriesHistoryRowStatus status={status} />
      </div>
      <div>
        <Typography
          variant="extra-small"
          tag="p"
          className={classes["delivery_row_subtitle"]}
        >
          Адрес доставки
        </Typography>
        <Typography variant="regular">{`${receiverAddress.street}, ${receiverAddress.house}, ${receiverAddress.apartment}`}</Typography>
      </div>
      <Button
        variant="link"
        color="secondary"
        onClick={() =>
          navigate({ to: PagePaths.DELIVERY_DETAILS, params: { orderId: deliveryId } })
        }
      >
        Подробнее
      </Button>
    </div>
  );
}

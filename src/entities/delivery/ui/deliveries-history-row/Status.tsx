import classes from "./styles.module.css";
import type { DeliveryOrder } from "@/shared/api";
import { DeliveryStatus } from "@/shared/api";
import { Typography } from "@/shared/ui";

interface Props {
  status: DeliveryOrder["status"];
}

function getText(status: DeliveryStatus) {
  switch (status) {
    case DeliveryStatus.Success:
      return "Заказ доставлен";
    case DeliveryStatus.Canceled:
      return "Заказ отменён";
    case DeliveryStatus.InProcessing:
      return "Заказ в обработке";
    case DeliveryStatus.OnMyWay:
      return "Заказ в пути";
    case DeliveryStatus.WaitingCourier:
      return "Заказ ожидает курьера";
    default:
      return "Ошибка при получении статуса заказа";
  }
}

function getPointClass(status: DeliveryStatus) {
  switch (status) {
    case DeliveryStatus.Success:
      return classes["success"];
    case DeliveryStatus.Canceled:
      return classes["cancelled"];
    default:
      return classes["waiting"];
  }
}

export function DeliveriesHistoryRowStatus({ status }: Props) {
  return (
    <>
      <Typography variant="regular" className={classes["delivery_row_status_wrapper"]}>
        <div
          className={`${classes["delivery_row_status_point"]} ${getPointClass(status)}`}
        ></div>{" "}
        {getText(status)}
      </Typography>
    </>
  );
}

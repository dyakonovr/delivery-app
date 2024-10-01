import { Loader2 as LoaderIcon } from "lucide-react";
import classes from "./styles.module.css";
import { DeliveriesHistoryRow } from "@/entities/delivery";
import { useGetDeliveryOrdersQuery } from "@/shared/api";
import { Container, Typography } from "@/shared/ui";
import { API_AUTHORIZATION_TOKEN, API_HEADER_AUTHORIZATION } from "@/shared/config";

export function DeliveriesHistoryPage() {
  const { data, loading } = useGetDeliveryOrdersQuery({
    context: {
      headers: {
        [API_HEADER_AUTHORIZATION]: API_AUTHORIZATION_TOKEN
      }
    }
  });
  const orders = data?.getDeliveryOrders.orders;

  return (
    <Container
      className={`${classes["history_page_container"]} default-page-vertical-offsets`}
    >
      <Typography variant="title">История</Typography>

      {loading && <LoaderIcon className="spin-animation" />}

      {orders &&
        !loading &&
        orders.map((order) => (
          <DeliveriesHistoryRow
            deliveryId={order._id}
            status={order.status}
            receiverAddress={order.receiverAddress}
            key={order._id}
          />
        ))}
    </Container>
  );
}

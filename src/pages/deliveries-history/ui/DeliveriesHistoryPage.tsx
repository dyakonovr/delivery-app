import classes from "./styles.module.css";
import { DeliveriesHistoryRow } from "@/entities/delivery";
import { useGetDeliveryOrdersQuery } from "@/entities/delivery/api";
import { Container, LoadingSpin, Typography } from "@/shared/ui";
import { GRAPHQL_AUTHORIZATION_CONTEXT } from "@/shared/config";

export function DeliveriesHistoryPage() {
  const { data, loading } = useGetDeliveryOrdersQuery({
    ...GRAPHQL_AUTHORIZATION_CONTEXT
  });
  const orders = data?.getDeliveryOrders.orders;

  return (
    <Container
      className={`${classes["history_page_container"]} default-page-vertical-offsets`}
    >
      <Typography variant="title">История</Typography>

      {loading && <LoadingSpin />}

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

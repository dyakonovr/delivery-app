import { useState } from "react";
import { getRouteApi, useRouter } from "@tanstack/react-router";
import type { Dispatch, SetStateAction } from "react";
import type { DeliveryDetailsBlockProps } from "@/entities/delivery";
import { useGetDeliveryOrderQuery } from "@/entities/delivery/api";
import { GRAPHQL_AUTHORIZATION_CONTEXT, PagePaths } from "@/shared/config";

interface UseDeliveryDetails {
  orderId: string;
  isCancelDeliveryDialogShowed: boolean;
  isDataLoading: boolean;
  blocks: DeliveryDetailsBlockProps[];
  pushBack: () => void;
  setIsCancelDeliveryDialogShowed: Dispatch<SetStateAction<boolean>>;
}

const deliveryDetailsRoute = getRouteApi(PagePaths.DELIVERY_DETAILS);

export const useDeliveryDetails = (): UseDeliveryDetails => {
  const { history } = useRouter();
  const [isCancelDeliveryDialogShowed, setIsCancelDeliveryDialogShowed] = useState(false);

  const { orderId } = deliveryDetailsRoute.useParams();
  const { loading: isDataLoading, data } = useGetDeliveryOrderQuery({
    ...GRAPHQL_AUTHORIZATION_CONTEXT,
    variables: { orderId }
  });

  const order = data?.getDeliveryOrder.order;

  const blocks: DeliveryDetailsBlockProps[] = [
    {
      title: "Получатель",
      items: [
        {
          title: "ФИО",
          value: `${order?.receiver?.lastname} ${order?.receiver?.firstname} ${order?.receiver?.middlename ?? ""}`
        },
        {
          title: "Телефон",
          value: order?.receiver?.phone ? `+${order.receiver.phone}` : ""
        }
      ]
    },
    {
      title: "Отправитель",
      items: [
        {
          title: "ФИО",
          value: `${order?.sender?.lastname} ${order?.sender?.firstname} ${order?.sender.middlename ?? ""}`
        },
        {
          title: "Телефон",
          value: order?.receiver?.phone ? `+${order.receiver.phone}` : ""
        }
      ]
    },
    {
      title: "Откуда забрать",
      items: [
        {
          title: "Адрес",
          value: `${order?.senderAddress.street}, д. ${order?.senderAddress.house}`
        },
        {
          title: "Заметка",
          value: order?.senderAddress?.comment ?? ""
        }
      ]
    },
    {
      title: "Куда доставить",
      items: [
        {
          title: "Адрес",
          value: `${order?.receiverAddress?.street}, д. ${order?.receiverAddress.house}`
        },
        {
          title: "Заметка",
          value: order?.receiverAddress?.comment ?? ""
        }
      ]
    }
  ];

  return {
    orderId,
    blocks,
    isDataLoading,
    isCancelDeliveryDialogShowed,
    setIsCancelDeliveryDialogShowed,
    pushBack: () => history.back()
  };
};

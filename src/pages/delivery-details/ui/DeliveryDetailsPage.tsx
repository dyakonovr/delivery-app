import { useDeliveryDetails } from "../hooks/useDeliveryDetails.ts";
import classes from "./styles.module.css";
import { Button, Container, Dialog, LoadingSpin, Typography } from "@/shared/ui";
import { DeliveryDetails } from "@/entities/delivery";
import { CancelDeliveryButton } from "@/features/cancel-delivery-button";

export function DeliveryDetailsPage() {
  const {
    orderId,
    blocks,
    isDataLoading,
    isCancelDeliveryDialogShowed,
    setIsCancelDeliveryDialogShowed,
    pushBack
  } = useDeliveryDetails();

  return (
    <>
      <Container className="default-page-vertical-offsets">
        <Typography variant={"title"}>Детали</Typography>

        {isDataLoading && <LoadingSpin className={classes["delivery_details_loader"]} />}
        {!isDataLoading && <DeliveryDetails blocks={blocks} />}

        <div className={classes.delivery_details_buttons}>
          <Button
            variant={"contained"}
            color={"secondary"}
            onClick={() => setIsCancelDeliveryDialogShowed(true)}
          >
            Отменить доставку
          </Button>
          <Button variant={"contained"} color={"primary"} onClick={pushBack}>
            Закрыть
          </Button>
        </div>
      </Container>

      <Dialog
        icon={"question"}
        title={"Отменить доставку?"}
        isOpened={isCancelDeliveryDialogShowed}
        footerButtons={
          <>
            <CancelDeliveryButton orderId={orderId} onClick={pushBack}>
              Отменить доставку
            </CancelDeliveryButton>
            <Button
              variant={"contained"}
              color={"primary"}
              onClick={() => setIsCancelDeliveryDialogShowed(false)}
            >
              Не отменять
            </Button>
          </>
        }
      />
    </>
  );
}

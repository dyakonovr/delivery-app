import { FormProvider } from "react-hook-form";
import { useMemo } from "react";
import { useCreateDeliveryPage } from "../hooks/useCreateDeliveryPage";
import { MultistepForm } from "./MultistepForm";
import {
  CreateDeliveryPageSenderPart,
  CreateDeliveryPageReceiverAddressPart,
  CreateDeliveryPageReceiverPart,
  CreateDeliveryPageSenderAddressPart,
  CreateDeliveryPageOptionPart,
  CreateDeliveryPagePayerPart,
  CreateDeliveryPageResultPart
} from "./form-parts";
import classes from "./styles.module.css";
import { Container } from "@/shared/ui";

export function CreateDeliveryPage() {
  const {
    isResultDialogShowed,
    options,
    form,
    onFormSubmit,
    onResultDialogSubmit,
    onResultDialogClose
  } = useCreateDeliveryPage();

  const screens = useMemo(
    () => [
      <CreateDeliveryPageOptionPart options={options} key="form-option-part" />,
      <CreateDeliveryPageSenderPart key="form-sender-part" />,
      <CreateDeliveryPageReceiverPart key="form-receiver-part" />,
      <CreateDeliveryPageSenderAddressPart key="form-sender-address-part" />,
      <CreateDeliveryPageReceiverAddressPart key="form-receiver-address-part" />,
      <CreateDeliveryPagePayerPart key="form-payer-part" />,
      <CreateDeliveryPageResultPart
        isDialogShowed={isResultDialogShowed}
        onDialogSubmit={onResultDialogSubmit}
        onDialogClose={onResultDialogClose}
        key="form-result-part"
      />
    ],
    [options, isResultDialogShowed, onResultDialogSubmit, onResultDialogClose]
  );

  return (
    <div className="default-page-vertical-offsets">
      <Container>
        <form className={classes["create_delivery_form"]}>
          <FormProvider {...form}>
            <MultistepForm screens={screens} submitForm={onFormSubmit} />
          </FormProvider>
        </form>
      </Container>
    </div>
  );
}

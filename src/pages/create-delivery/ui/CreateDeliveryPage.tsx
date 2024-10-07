import { FormProvider } from "react-hook-form";
import { useCreateDeliveryPage } from "../hooks";
import { MultistepForm } from "./MultistepForm";
import classes from "./styles.module.css";
import { Container } from "@/shared/ui";

export function CreateDeliveryPage() {
  const {
    isResultDialogShowed,
    screens,
    form,
    onFormSubmit,
    onResultDialogSubmit,
    onResultDialogClose
  } = useCreateDeliveryPage();

  return (
    <Container className="default-page-vertical-offsets">
      <form className={classes["create_delivery_form"]}>
        <FormProvider {...form}>
          <MultistepForm
            screens={screens}
            submitForm={onFormSubmit}
            isDialogShowed={isResultDialogShowed}
            onDialogSubmit={onResultDialogSubmit}
            onDialogClose={onResultDialogClose}
          />
        </FormProvider>
      </form>
    </Container>
  );
}

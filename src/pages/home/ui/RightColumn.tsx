import {
  MapPin as MapPinIcon,
  Navigation as NavigationIcon,
  Mail as MailIcon
} from "lucide-react";
import { useHomePage } from "../hooks/useHomePage";
import classes from "./styles.module.css";
import { Button, Select, Typography } from "@/shared/ui";

export function HomePageRightColumn() {
  const {
    formErrors,
    deliveryPackageTypesOptions,
    deliveryPointsOptions,
    register,
    onFormSubmit
  } = useHomePage();
  const isButtonDisabled =
    deliveryPackageTypesOptions.length === 0 || deliveryPointsOptions.length === 0;

  return (
    <div className={classes["home_page_right_column"]}>
      <Typography variant="title" className={classes["home_page_form_title"]}>
        Рассчитать доставку
      </Typography>

      <form className={classes["home_page_form"]} onSubmit={onFormSubmit}>
        <Select
          options={deliveryPointsOptions}
          placeholder="Выберите город"
          labelText="Город отправки"
          icon={<MapPinIcon />}
          {...register("senderPoint")}
        />
        <Select
          options={deliveryPointsOptions}
          placeholder="Выберите город"
          labelText="Город назначения"
          icon={<NavigationIcon />}
          {...register("receiverPoint")}
        />
        <Select
          options={deliveryPackageTypesOptions}
          placeholder="Выберите размер"
          labelText="Размер посылки"
          icon={<MailIcon />}
          errorMessage={formErrors.package?.message}
          {...register("package")}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isButtonDisabled}
        >
          Рассчитать
        </Button>
      </form>
    </div>
  );
}

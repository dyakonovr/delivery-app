import { OTP_VALUE_LENGTH } from "../config/constants";
import { useLoginPage } from "../hooks/useLoginPage";
import classes from "./styles.module.css";
import { filterNumberKeys } from "@/shared/lib";
import { Button, Container, Input, Typography } from "@/shared/ui";
import { CountdownButton } from "@/features/countdown-button";

export function LoginPage() {
  const {
    otpCountdown,
    isLoading,
    isOtpShowed,
    formErrors,
    register,
    onFormSubmit,
    sendOtpAgain
  } = useLoginPage();

  return (
    <Container className="default-page-vertical-offsets">
      <form className={classes["login_page_wrapper"]} onSubmit={onFormSubmit}>
        <Typography variant="title" tag="h1">
          Вход
        </Typography>
        <Typography variant="regular" tag="p">
          Введите номер телефона для входа в личный кабинет
        </Typography>
        <Input
          className={classes["login_page_input"]}
          type="number"
          errorMessage={formErrors["phone"]?.message}
          onKeyDown={filterNumberKeys}
          disabled={isLoading || isOtpShowed}
          placeholder="Телефон"
          {...register("phone", {
            valueAsNumber: true,
            required: true
          })}
        />

        {isOtpShowed && (
          <Input
            className={classes["login_page_input"]}
            type="number"
            errorMessage={formErrors["otpCode"]?.message}
            onKeyDown={filterNumberKeys}
            placeholder="Проверочный код"
            disabled={isLoading}
            minLength={OTP_VALUE_LENGTH}
            maxLength={OTP_VALUE_LENGTH}
            required
            {...register("otpCode", {
              valueAsNumber: true
            })}
          />
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading}
          className={classes["login_page_submit_btn"]}
        >
          {!isOtpShowed ? "Продолжить" : "Войти"}
        </Button>

        <CountdownButton
          className={[
            classes["login_page_countdown_button"],
            !isOtpShowed ? classes["hidden"] : ""
          ].join(" ")}
          delayInMs={otpCountdown}
          isEnabled={isOtpShowed}
          onClick={sendOtpAgain}
        />
      </form>
    </Container>
  );
}

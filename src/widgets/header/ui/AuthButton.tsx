import { LogOut as LogoutIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import classes from "./styles.module.css";
import { Button } from "@/shared/ui";
import { useUserStore } from "@/entities/user/model";
import { PagePaths } from "@/shared/config";

export function AuthButton() {
  const navigate = useNavigate();
  const { isAuth, setUser } = useUserStore();

  // Functions
  function navigateAfterAuth() {
    if (isAuth) return setUser(null);
    navigate({ to: PagePaths.LOGIN });
  }
  // Functions END

  return (
    <Button
      variant="text"
      color="primary"
      className={classes["auth_button"]}
      onClick={navigateAfterAuth}
    >
      <LogoutIcon /> {isAuth ? "Выйти" : "Войти"}
    </Button>
  );
}

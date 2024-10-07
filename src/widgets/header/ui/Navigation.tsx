import { Link, useLocation } from "@tanstack/react-router";
import { User as ProfileIcon, Clock as HistoryIcon } from "lucide-react";
import classes from "./styles.module.css";
import { PagePaths } from "@/shared/config";
import { useUserStore } from "@/entities/user";

export function Navigation() {
  const isAuth = useUserStore((state) => state.isAuth);
  const location = useLocation();

  if (!isAuth) return null;

  // Functions
  function isActive(path: string): boolean {
    return location.href === path;
  }
  // Functions END

  return (
    <nav>
      <ul className={classes["header_navigation_list"]}>
        <li>
          <Link
            to={PagePaths.PROFILE}
            className={`${classes["header_navigation_link"]} ${isActive("ttt") && classes["active"]}`}
          >
            <ProfileIcon /> Профиль
          </Link>
        </li>
        <li>
          <Link
            to={PagePaths.DELIVERIES_HISTORY}
            className={`${classes["header_navigation_link"]} ${isActive(PagePaths.DELIVERIES_HISTORY) && classes["active"]}`}
          >
            <HistoryIcon /> История
          </Link>
        </li>
      </ul>
    </nav>
  );
}

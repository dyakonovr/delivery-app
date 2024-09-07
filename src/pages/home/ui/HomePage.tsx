import { HomePageRightColumn } from "./RightColumn";
import { HomePageLeftColumn } from "./LeftColumn";
import classes from "./styles.module.css";

export function HomePage() {
  return (
    <div className={classes["home_page_wrapper"]}>
      <HomePageLeftColumn />
      <HomePageRightColumn />
    </div>
  );
}

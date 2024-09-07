import planeImage from "../assets/img/hero-img.png";
import classes from "./styles.module.css";
import { Typography } from "@/shared/ui";

export function HomePageLeftColumn() {
  return (
    <div className={classes["home_page_left_column"]}>
      <img src={planeImage} />
      <Typography variant="title" className={classes["home_page_slogan"]}>
        ЦФТ доставка - быстро, удобно, надежно!
      </Typography>
    </div>
  );
}

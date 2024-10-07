import { Plane as PlaneIcon, BusFront as BusFrontIcon } from "lucide-react";
import classes from "./styles.module.css";
import { Typography } from "@/shared/ui";
import { formatDeliveryPrice, formatDeliveryTime } from "@/entities/delivery";
import { DeliveryOptionType } from "@/shared/api";

interface Props {
  title: string;
  price: number;
  daysCount: number;
  type: DeliveryOptionType;
  onClick: () => void;
}

export function CreateDeliveryFormOptionItem({
  title,
  price,
  daysCount,
  type,
  onClick
}: Props) {
  return (
    <div
      className={`${classes["create_delivery_form_option"]} ${classes["create_delivery_form_option_" + type.toLowerCase()]}`}
      onClick={onClick}
    >
      <div className={classes["create_delivery_form_option_icon"]}>
        {type === DeliveryOptionType.Express ? (
          <PlaneIcon className={classes["create_delivery_form_option_icon_img"]} />
        ) : (
          <BusFrontIcon className={classes["create_delivery_form_option_icon_img"]} />
        )}
      </div>
      <div>
        <Typography
          variant="extra-small"
          tag="p"
          className={`${classes["create_delivery_form_option_text"]} first-letter-big`}
        >
          {title}
        </Typography>
        <Typography
          variant="regular"
          className={`${classes["create_delivery_form_option_price"]} ${classes["create_delivery_form_option_text"]}`}
          tag="p"
        >
          {formatDeliveryPrice(price)} &#8381;
        </Typography>
        <Typography
          variant="extra-small"
          tag="p"
          className={classes["create_delivery_form_option_text"]}
        >
          {formatDeliveryTime(daysCount)}
        </Typography>
      </div>
    </div>
  );
}

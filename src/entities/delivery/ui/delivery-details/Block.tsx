import classes from "./styles.module.css";
import { Typography } from "@/shared/ui";

export type DeliveryDetailsBlockProps = {
  title: string;
  items: {
    title: string;
    value: string | number;
  }[];
};

export function DeliveryDetailsBlock({ title, items }: DeliveryDetailsBlockProps) {
  return (
    <div className={classes.delivery_details_block}>
      <Typography variant={"regular"} className={classes.delivery_details_block_title}>
        {title}
      </Typography>

      <div>
        {items.map((item) => (
          <div className={classes.delivery_details_block_items_wrapper} key={item.title}>
            <Typography variant={"extra-small"}>{item.title}</Typography>
            <Typography variant={"regular"}>{item.value}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

import { DeliveryDetailsBlock } from "./Block.tsx";
import classes from "./styles.module.css";
import type { DeliveryDetailsBlockProps } from "./Block.tsx";

interface Props {
  blocks: DeliveryDetailsBlockProps[];
}

export function DeliveryDetails({ blocks }: Props) {
  return (
    <div className={classes.delivery_details_blocks_wrapper}>
      {blocks.map((block) => (
        <DeliveryDetailsBlock {...block} key={block.title} />
      ))}
    </div>
  );
}

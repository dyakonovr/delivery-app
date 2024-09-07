import { Pencil as PencilIcon } from "lucide-react";
import classes from "./styles.module.css";
import { Typography } from "@/shared/ui";
import { useMultistepFormContext } from "@/pages/create-delivery/model";

interface Props {
  title: string;
  items: {
    subtitle: string;
    value: string;
  }[];
  formStep: number;
}

export function ResultPartItem({ title, items, formStep }: Props) {
  const { setStep } = useMultistepFormContext();

  return (
    <div className={classes["result_part_item"]}>
      <div className={classes["result_part_item_header"]}>
        <Typography variant="regular" className={classes["result_part_item_title"]}>
          {title}
        </Typography>

        <PencilIcon
          onClick={() => setStep(formStep)}
          className={classes["result_part_item_button"]}
        />
      </div>
      <div className={classes["result_part_item_content"]}>
        {items.map((item) => (
          <div key={item.subtitle}>
            <Typography
              variant="extra-small"
              className={classes["result_part_item_content_title"]}
            >
              {item.subtitle}
            </Typography>
            <Typography variant="regular">{item.value}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

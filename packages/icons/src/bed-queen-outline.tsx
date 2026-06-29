import { mdiBedQueenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedQueenOutline(props: IconComponentProps) {
  return <Icon path={mdiBedQueenOutline} {...props} />;
}

export { mdiBedQueenOutline as path };

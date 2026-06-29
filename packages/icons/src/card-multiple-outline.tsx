import { mdiCardMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiCardMultipleOutline} {...props} />;
}

export { mdiCardMultipleOutline as path };

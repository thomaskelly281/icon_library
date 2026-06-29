import { mdiCardTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardTextOutline(props: IconComponentProps) {
  return <Icon path={mdiCardTextOutline} {...props} />;
}

export { mdiCardTextOutline as path };

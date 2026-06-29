import { mdiCardRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiCardRemoveOutline} {...props} />;
}

export { mdiCardRemoveOutline as path };

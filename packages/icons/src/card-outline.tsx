import { mdiCardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardOutline(props: IconComponentProps) {
  return <Icon path={mdiCardOutline} {...props} />;
}

export { mdiCardOutline as path };

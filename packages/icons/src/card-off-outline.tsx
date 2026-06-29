import { mdiCardOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CardOffOutline(props: IconComponentProps) {
  return <Icon path={mdiCardOffOutline} {...props} />;
}

export { mdiCardOffOutline as path };

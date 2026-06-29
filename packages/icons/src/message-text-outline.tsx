import { mdiMessageTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageTextOutline} {...props} />;
}

export { mdiMessageTextOutline as path };

import { mdiCarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarOutline(props: IconComponentProps) {
  return <Icon path={mdiCarOutline} {...props} />;
}

export { mdiCarOutline as path };

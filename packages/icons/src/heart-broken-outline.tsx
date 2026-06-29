import { mdiHeartBrokenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartBrokenOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartBrokenOutline} {...props} />;
}

export { mdiHeartBrokenOutline as path };

import { mdiHeartOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartOffOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartOffOutline} {...props} />;
}

export { mdiHeartOffOutline as path };

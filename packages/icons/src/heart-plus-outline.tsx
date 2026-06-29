import { mdiHeartPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartPlusOutline} {...props} />;
}

export { mdiHeartPlusOutline as path };

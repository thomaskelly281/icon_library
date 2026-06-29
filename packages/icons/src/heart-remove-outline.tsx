import { mdiHeartRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartRemoveOutline} {...props} />;
}

export { mdiHeartRemoveOutline as path };

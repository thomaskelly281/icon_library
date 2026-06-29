import { mdiHeartHalfOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartHalfOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartHalfOutline} {...props} />;
}

export { mdiHeartHalfOutline as path };

import { mdiHeartBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartBoxOutline} {...props} />;
}

export { mdiHeartBoxOutline as path };

import { mdiHeartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartOutline} {...props} />;
}

export { mdiHeartOutline as path };

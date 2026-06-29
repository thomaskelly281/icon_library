import { mdiHeartMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartMultipleOutline} {...props} />;
}

export { mdiHeartMultipleOutline as path };

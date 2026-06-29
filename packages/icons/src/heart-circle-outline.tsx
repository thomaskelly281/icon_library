import { mdiHeartCircleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartCircleOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartCircleOutline} {...props} />;
}

export { mdiHeartCircleOutline as path };

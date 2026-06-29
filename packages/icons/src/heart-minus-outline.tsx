import { mdiHeartMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeartMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiHeartMinusOutline} {...props} />;
}

export { mdiHeartMinusOutline as path };

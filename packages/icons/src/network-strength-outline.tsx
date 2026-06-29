import { mdiNetworkStrengthOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkStrengthOutline(props: IconComponentProps) {
  return <Icon path={mdiNetworkStrengthOutline} {...props} />;
}

export { mdiNetworkStrengthOutline as path };

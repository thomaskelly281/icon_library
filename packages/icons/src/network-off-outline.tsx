import { mdiNetworkOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkOffOutline(props: IconComponentProps) {
  return <Icon path={mdiNetworkOffOutline} {...props} />;
}

export { mdiNetworkOffOutline as path };

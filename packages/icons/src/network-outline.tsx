import { mdiNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiNetworkOutline} {...props} />;
}

export { mdiNetworkOutline as path };

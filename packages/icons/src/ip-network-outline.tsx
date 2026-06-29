import { mdiIpNetworkOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IpNetworkOutline(props: IconComponentProps) {
  return <Icon path={mdiIpNetworkOutline} {...props} />;
}

export { mdiIpNetworkOutline as path };

import { mdiAccessPointNetworkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointNetworkOff(props: IconComponentProps) {
  return <Icon path={mdiAccessPointNetworkOff} {...props} />;
}

export { mdiAccessPointNetworkOff as path };

import { mdiIpNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function IpNetwork(props: IconComponentProps) {
  return <Icon path={mdiIpNetwork} {...props} />;
}

export { mdiIpNetwork as path };

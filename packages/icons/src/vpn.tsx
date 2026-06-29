import { mdiVpn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Vpn(props: IconComponentProps) {
  return <Icon path={mdiVpn} {...props} />;
}

export { mdiVpn as path };

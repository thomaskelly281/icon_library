import { mdiTunnel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tunnel(props: IconComponentProps) {
  return <Icon path={mdiTunnel} {...props} />;
}

export { mdiTunnel as path };

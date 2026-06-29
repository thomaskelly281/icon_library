import { mdiFirewire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Firewire(props: IconComponentProps) {
  return <Icon path={mdiFirewire} {...props} />;
}

export { mdiFirewire as path };

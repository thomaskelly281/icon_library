import { mdiEthernetCableOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EthernetCableOff(props: IconComponentProps) {
  return <Icon path={mdiEthernetCableOff} {...props} />;
}

export { mdiEthernetCableOff as path };

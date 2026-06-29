import { mdiEthernetOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EthernetOff(props: IconComponentProps) {
  return <Icon path={mdiEthernetOff} {...props} />;
}

export { mdiEthernetOff as path };

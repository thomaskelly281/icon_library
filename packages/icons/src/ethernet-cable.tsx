import { mdiEthernetCable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EthernetCable(props: IconComponentProps) {
  return <Icon path={mdiEthernetCable} {...props} />;
}

export { mdiEthernetCable as path };

import { mdiZigbee } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Zigbee(props: IconComponentProps) {
  return <Icon path={mdiZigbee} {...props} />;
}

export { mdiZigbee as path };

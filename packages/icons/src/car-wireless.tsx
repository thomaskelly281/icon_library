import { mdiCarWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarWireless(props: IconComponentProps) {
  return <Icon path={mdiCarWireless} {...props} />;
}

export { mdiCarWireless as path };

import { mdiKeyWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyWireless(props: IconComponentProps) {
  return <Icon path={mdiKeyWireless} {...props} />;
}

export { mdiKeyWireless as path };

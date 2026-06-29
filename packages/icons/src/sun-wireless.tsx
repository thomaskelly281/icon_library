import { mdiSunWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SunWireless(props: IconComponentProps) {
  return <Icon path={mdiSunWireless} {...props} />;
}

export { mdiSunWireless as path };

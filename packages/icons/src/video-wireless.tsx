import { mdiVideoWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoWireless(props: IconComponentProps) {
  return <Icon path={mdiVideoWireless} {...props} />;
}

export { mdiVideoWireless as path };

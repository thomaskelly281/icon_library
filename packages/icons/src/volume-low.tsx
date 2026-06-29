import { mdiVolumeLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumeLow(props: IconComponentProps) {
  return <Icon path={mdiVolumeLow} {...props} />;
}

export { mdiVolumeLow as path };

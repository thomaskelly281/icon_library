import { mdiVolumePlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VolumePlus(props: IconComponentProps) {
  return <Icon path={mdiVolumePlus} {...props} />;
}

export { mdiVolumePlus as path };

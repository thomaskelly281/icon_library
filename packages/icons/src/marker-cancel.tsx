import { mdiMarkerCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MarkerCancel(props: IconComponentProps) {
  return <Icon path={mdiMarkerCancel} {...props} />;
}

export { mdiMarkerCancel as path };

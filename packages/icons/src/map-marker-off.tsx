import { mdiMapMarkerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerOff(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerOff} {...props} />;
}

export { mdiMapMarkerOff as path };

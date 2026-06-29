import { mdiMapMarkerCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerCircle(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerCircle} {...props} />;
}

export { mdiMapMarkerCircle as path };

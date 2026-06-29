import { mdiMapMarkerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerAlert(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerAlert} {...props} />;
}

export { mdiMapMarkerAlert as path };

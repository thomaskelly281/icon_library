import { mdiMapMarkerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerPlus(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerPlus} {...props} />;
}

export { mdiMapMarkerPlus as path };

import { mdiMapMarkerRadius } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRadius(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRadius} {...props} />;
}

export { mdiMapMarkerRadius as path };

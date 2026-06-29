import { mdiMapMarkerDistance } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerDistance(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerDistance} {...props} />;
}

export { mdiMapMarkerDistance as path };

import { mdiMapMarkerRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRight(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRight} {...props} />;
}

export { mdiMapMarkerRight as path };

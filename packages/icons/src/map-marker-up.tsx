import { mdiMapMarkerUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerUp(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerUp} {...props} />;
}

export { mdiMapMarkerUp as path };

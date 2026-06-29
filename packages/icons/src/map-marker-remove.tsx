import { mdiMapMarkerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRemove(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRemove} {...props} />;
}

export { mdiMapMarkerRemove as path };

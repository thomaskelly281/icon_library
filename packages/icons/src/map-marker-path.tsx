import { mdiMapMarkerPath } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerPath(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerPath} {...props} />;
}

export { mdiMapMarkerPath as path };

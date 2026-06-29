import { mdiMapMarkerMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerMultiple(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerMultiple} {...props} />;
}

export { mdiMapMarkerMultiple as path };

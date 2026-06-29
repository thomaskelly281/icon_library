import { mdiMapMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarker(props: IconComponentProps) {
  return <Icon path={mdiMapMarker} {...props} />;
}

export { mdiMapMarker as path };

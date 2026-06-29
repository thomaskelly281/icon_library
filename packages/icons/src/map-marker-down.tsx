import { mdiMapMarkerDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerDown(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerDown} {...props} />;
}

export { mdiMapMarkerDown as path };

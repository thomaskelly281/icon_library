import { mdiMapMarkerLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerLeft(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerLeft} {...props} />;
}

export { mdiMapMarkerLeft as path };

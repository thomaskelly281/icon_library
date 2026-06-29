import { mdiMapMarkerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerCheck(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerCheck} {...props} />;
}

export { mdiMapMarkerCheck as path };

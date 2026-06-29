import { mdiMapMarkerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerMinus(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerMinus} {...props} />;
}

export { mdiMapMarkerMinus as path };

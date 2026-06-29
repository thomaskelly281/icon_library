import { mdiMapMarkerStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerStar(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerStar} {...props} />;
}

export { mdiMapMarkerStar as path };

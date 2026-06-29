import { mdiMapMarkerPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerPlusOutline} {...props} />;
}

export { mdiMapMarkerPlusOutline as path };

import { mdiMapMarkerRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRemoveOutline} {...props} />;
}

export { mdiMapMarkerRemoveOutline as path };

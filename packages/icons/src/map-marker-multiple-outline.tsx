import { mdiMapMarkerMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerMultipleOutline} {...props} />;
}

export { mdiMapMarkerMultipleOutline as path };

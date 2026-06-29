import { mdiMapMarkerAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerAlertOutline} {...props} />;
}

export { mdiMapMarkerAlertOutline as path };

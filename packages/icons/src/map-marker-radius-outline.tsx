import { mdiMapMarkerRadiusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRadiusOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRadiusOutline} {...props} />;
}

export { mdiMapMarkerRadiusOutline as path };

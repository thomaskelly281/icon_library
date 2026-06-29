import { mdiMapMarkerStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerStarOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerStarOutline} {...props} />;
}

export { mdiMapMarkerStarOutline as path };

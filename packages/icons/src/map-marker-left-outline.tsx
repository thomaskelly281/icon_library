import { mdiMapMarkerLeftOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerLeftOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerLeftOutline} {...props} />;
}

export { mdiMapMarkerLeftOutline as path };

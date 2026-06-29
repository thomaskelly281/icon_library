import { mdiMapMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerOutline} {...props} />;
}

export { mdiMapMarkerOutline as path };

import { mdiMapMarkerCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerCheckOutline} {...props} />;
}

export { mdiMapMarkerCheckOutline as path };

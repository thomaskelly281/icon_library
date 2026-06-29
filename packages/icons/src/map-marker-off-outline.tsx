import { mdiMapMarkerOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerOffOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerOffOutline} {...props} />;
}

export { mdiMapMarkerOffOutline as path };

import { mdiMapMarkerRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRightOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRightOutline} {...props} />;
}

export { mdiMapMarkerRightOutline as path };

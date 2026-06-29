import { mdiMapMarkerMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerMinusOutline} {...props} />;
}

export { mdiMapMarkerMinusOutline as path };

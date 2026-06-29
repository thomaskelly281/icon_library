import { mdiMapMarkerRemoveVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerRemoveVariant(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerRemoveVariant} {...props} />;
}

export { mdiMapMarkerRemoveVariant as path };

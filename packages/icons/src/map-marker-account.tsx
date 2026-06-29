import { mdiMapMarkerAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MapMarkerAccount(props: IconComponentProps) {
  return <Icon path={mdiMapMarkerAccount} {...props} />;
}

export { mdiMapMarkerAccount as path };

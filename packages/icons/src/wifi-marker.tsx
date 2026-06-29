import { mdiWifiMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiMarker(props: IconComponentProps) {
  return <Icon path={mdiWifiMarker} {...props} />;
}

export { mdiWifiMarker as path };

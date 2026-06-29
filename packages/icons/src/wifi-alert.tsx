import { mdiWifiAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiAlert(props: IconComponentProps) {
  return <Icon path={mdiWifiAlert} {...props} />;
}

export { mdiWifiAlert as path };

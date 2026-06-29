import { mdiWifiRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiRefresh(props: IconComponentProps) {
  return <Icon path={mdiWifiRefresh} {...props} />;
}

export { mdiWifiRefresh as path };

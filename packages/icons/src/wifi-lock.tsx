import { mdiWifiLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiLock(props: IconComponentProps) {
  return <Icon path={mdiWifiLock} {...props} />;
}

export { mdiWifiLock as path };

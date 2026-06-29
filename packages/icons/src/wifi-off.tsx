import { mdiWifiOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiOff(props: IconComponentProps) {
  return <Icon path={mdiWifiOff} {...props} />;
}

export { mdiWifiOff as path };

import { mdiWifiStrengthOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthOff(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthOff} {...props} />;
}

export { mdiWifiStrengthOff as path };

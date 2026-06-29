import { mdiWifiStrength1Lock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength1Lock(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength1Lock} {...props} />;
}

export { mdiWifiStrength1Lock as path };

import { mdiWifiStrength1Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength1Alert(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength1Alert} {...props} />;
}

export { mdiWifiStrength1Alert as path };

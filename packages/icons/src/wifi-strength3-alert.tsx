import { mdiWifiStrength3Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength3Alert(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength3Alert} {...props} />;
}

export { mdiWifiStrength3Alert as path };

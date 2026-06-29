import { mdiWifiStrength4Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength4Alert(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength4Alert} {...props} />;
}

export { mdiWifiStrength4Alert as path };

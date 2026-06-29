import { mdiWifiStrength2Alert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength2Alert(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength2Alert} {...props} />;
}

export { mdiWifiStrength2Alert as path };

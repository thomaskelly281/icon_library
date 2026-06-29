import { mdiWifiStrength3 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength3(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength3} {...props} />;
}

export { mdiWifiStrength3 as path };

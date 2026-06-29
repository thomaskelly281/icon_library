import { mdiWifiStrength1 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength1(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength1} {...props} />;
}

export { mdiWifiStrength1 as path };

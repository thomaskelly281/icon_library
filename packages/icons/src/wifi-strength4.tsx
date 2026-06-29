import { mdiWifiStrength4 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength4(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength4} {...props} />;
}

export { mdiWifiStrength4 as path };

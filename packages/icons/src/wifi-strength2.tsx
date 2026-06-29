import { mdiWifiStrength2 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength2(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength2} {...props} />;
}

export { mdiWifiStrength2 as path };

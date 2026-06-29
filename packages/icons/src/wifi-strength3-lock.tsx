import { mdiWifiStrength3Lock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength3Lock(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength3Lock} {...props} />;
}

export { mdiWifiStrength3Lock as path };

import { mdiWifiStrength4Lock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength4Lock(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength4Lock} {...props} />;
}

export { mdiWifiStrength4Lock as path };

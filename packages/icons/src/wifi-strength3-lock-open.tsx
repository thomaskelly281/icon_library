import { mdiWifiStrength3LockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength3LockOpen(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength3LockOpen} {...props} />;
}

export { mdiWifiStrength3LockOpen as path };

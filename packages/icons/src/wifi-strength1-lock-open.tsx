import { mdiWifiStrength1LockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength1LockOpen(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength1LockOpen} {...props} />;
}

export { mdiWifiStrength1LockOpen as path };

import { mdiWifiLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiLockOpen(props: IconComponentProps) {
  return <Icon path={mdiWifiLockOpen} {...props} />;
}

export { mdiWifiLockOpen as path };

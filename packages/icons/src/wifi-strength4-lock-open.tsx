import { mdiWifiStrength4LockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength4LockOpen(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength4LockOpen} {...props} />;
}

export { mdiWifiStrength4LockOpen as path };

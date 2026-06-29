import { mdiWifiStrength2LockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength2LockOpen(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength2LockOpen} {...props} />;
}

export { mdiWifiStrength2LockOpen as path };

import { mdiWifiSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiSync(props: IconComponentProps) {
  return <Icon path={mdiWifiSync} {...props} />;
}

export { mdiWifiSync as path };

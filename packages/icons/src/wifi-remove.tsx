import { mdiWifiRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiRemove(props: IconComponentProps) {
  return <Icon path={mdiWifiRemove} {...props} />;
}

export { mdiWifiRemove as path };

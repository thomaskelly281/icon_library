import { mdiWifiPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiPlus(props: IconComponentProps) {
  return <Icon path={mdiWifiPlus} {...props} />;
}

export { mdiWifiPlus as path };

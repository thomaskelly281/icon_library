import { mdiWifiArrowUpDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowUpDown(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowUpDown} {...props} />;
}

export { mdiWifiArrowUpDown as path };

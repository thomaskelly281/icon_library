import { mdiWifiArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowDown(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowDown} {...props} />;
}

export { mdiWifiArrowDown as path };

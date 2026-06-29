import { mdiWifiArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowUp(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowUp} {...props} />;
}

export { mdiWifiArrowUp as path };

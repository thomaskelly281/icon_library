import { mdiWifiCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiCheck(props: IconComponentProps) {
  return <Icon path={mdiWifiCheck} {...props} />;
}

export { mdiWifiCheck as path };

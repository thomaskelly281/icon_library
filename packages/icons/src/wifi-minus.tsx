import { mdiWifiMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiMinus(props: IconComponentProps) {
  return <Icon path={mdiWifiMinus} {...props} />;
}

export { mdiWifiMinus as path };

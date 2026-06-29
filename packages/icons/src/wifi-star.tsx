import { mdiWifiStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStar(props: IconComponentProps) {
  return <Icon path={mdiWifiStar} {...props} />;
}

export { mdiWifiStar as path };

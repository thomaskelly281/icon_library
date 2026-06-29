import { mdiWifiCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiCog(props: IconComponentProps) {
  return <Icon path={mdiWifiCog} {...props} />;
}

export { mdiWifiCog as path };

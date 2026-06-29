import { mdiWifiSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiSettings(props: IconComponentProps) {
  return <Icon path={mdiWifiSettings} {...props} />;
}

export { mdiWifiSettings as path };

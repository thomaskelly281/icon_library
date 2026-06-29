import { mdiWifiCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiCancel(props: IconComponentProps) {
  return <Icon path={mdiWifiCancel} {...props} />;
}

export { mdiWifiCancel as path };

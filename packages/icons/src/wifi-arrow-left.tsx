import { mdiWifiArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowLeft} {...props} />;
}

export { mdiWifiArrowLeft as path };

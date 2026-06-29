import { mdiWifiArrowLeftRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowLeftRight(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowLeftRight} {...props} />;
}

export { mdiWifiArrowLeftRight as path };

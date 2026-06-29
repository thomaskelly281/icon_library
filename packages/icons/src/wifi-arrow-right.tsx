import { mdiWifiArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiArrowRight(props: IconComponentProps) {
  return <Icon path={mdiWifiArrowRight} {...props} />;
}

export { mdiWifiArrowRight as path };

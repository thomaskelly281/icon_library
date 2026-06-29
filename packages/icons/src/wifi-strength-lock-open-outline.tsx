import { mdiWifiStrengthLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthLockOpenOutline} {...props} />;
}

export { mdiWifiStrengthLockOpenOutline as path };

import { mdiWifiStrengthLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthLockOutline(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthLockOutline} {...props} />;
}

export { mdiWifiStrengthLockOutline as path };

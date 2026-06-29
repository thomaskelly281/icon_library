import { mdiWifiStrengthAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthAlertOutline} {...props} />;
}

export { mdiWifiStrengthAlertOutline as path };

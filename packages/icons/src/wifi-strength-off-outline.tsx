import { mdiWifiStrengthOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthOffOutline(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthOffOutline} {...props} />;
}

export { mdiWifiStrengthOffOutline as path };

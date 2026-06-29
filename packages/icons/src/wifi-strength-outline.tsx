import { mdiWifiStrengthOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrengthOutline(props: IconComponentProps) {
  return <Icon path={mdiWifiStrengthOutline} {...props} />;
}

export { mdiWifiStrengthOutline as path };

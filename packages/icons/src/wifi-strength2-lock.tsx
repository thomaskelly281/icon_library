import { mdiWifiStrength2Lock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WifiStrength2Lock(props: IconComponentProps) {
  return <Icon path={mdiWifiStrength2Lock} {...props} />;
}

export { mdiWifiStrength2Lock as path };

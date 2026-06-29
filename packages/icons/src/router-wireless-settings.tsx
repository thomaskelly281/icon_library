import { mdiRouterWirelessSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RouterWirelessSettings(props: IconComponentProps) {
  return <Icon path={mdiRouterWirelessSettings} {...props} />;
}

export { mdiRouterWirelessSettings as path };

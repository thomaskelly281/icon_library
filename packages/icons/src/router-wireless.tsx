import { mdiRouterWireless } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RouterWireless(props: IconComponentProps) {
  return <Icon path={mdiRouterWireless} {...props} />;
}

export { mdiRouterWireless as path };

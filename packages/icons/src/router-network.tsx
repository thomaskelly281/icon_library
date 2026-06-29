import { mdiRouterNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RouterNetwork(props: IconComponentProps) {
  return <Icon path={mdiRouterNetwork} {...props} />;
}

export { mdiRouterNetwork as path };

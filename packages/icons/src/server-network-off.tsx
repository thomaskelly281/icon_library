import { mdiServerNetworkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerNetworkOff(props: IconComponentProps) {
  return <Icon path={mdiServerNetworkOff} {...props} />;
}

export { mdiServerNetworkOff as path };

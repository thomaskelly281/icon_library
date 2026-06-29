import { mdiNetworkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NetworkOff(props: IconComponentProps) {
  return <Icon path={mdiNetworkOff} {...props} />;
}

export { mdiNetworkOff as path };

import { mdiAccountNetworkOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountNetworkOff(props: IconComponentProps) {
  return <Icon path={mdiAccountNetworkOff} {...props} />;
}

export { mdiAccountNetworkOff as path };

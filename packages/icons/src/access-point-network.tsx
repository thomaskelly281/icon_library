import { mdiAccessPointNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointNetwork(props: IconComponentProps) {
  return <Icon path={mdiAccessPointNetwork} {...props} />;
}

export { mdiAccessPointNetwork as path };

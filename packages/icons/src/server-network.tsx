import { mdiServerNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ServerNetwork(props: IconComponentProps) {
  return <Icon path={mdiServerNetwork} {...props} />;
}

export { mdiServerNetwork as path };

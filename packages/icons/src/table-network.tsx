import { mdiTableNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableNetwork(props: IconComponentProps) {
  return <Icon path={mdiTableNetwork} {...props} />;
}

export { mdiTableNetwork as path };

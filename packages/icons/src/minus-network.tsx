import { mdiMinusNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MinusNetwork(props: IconComponentProps) {
  return <Icon path={mdiMinusNetwork} {...props} />;
}

export { mdiMinusNetwork as path };

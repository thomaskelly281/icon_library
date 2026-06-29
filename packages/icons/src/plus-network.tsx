import { mdiPlusNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusNetwork(props: IconComponentProps) {
  return <Icon path={mdiPlusNetwork} {...props} />;
}

export { mdiPlusNetwork as path };

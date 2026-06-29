import { mdiCheckNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckNetwork(props: IconComponentProps) {
  return <Icon path={mdiCheckNetwork} {...props} />;
}

export { mdiCheckNetwork as path };

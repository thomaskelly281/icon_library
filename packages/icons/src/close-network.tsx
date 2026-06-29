import { mdiCloseNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CloseNetwork(props: IconComponentProps) {
  return <Icon path={mdiCloseNetwork} {...props} />;
}

export { mdiCloseNetwork as path };

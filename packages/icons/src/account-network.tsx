import { mdiAccountNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountNetwork(props: IconComponentProps) {
  return <Icon path={mdiAccountNetwork} {...props} />;
}

export { mdiAccountNetwork as path };

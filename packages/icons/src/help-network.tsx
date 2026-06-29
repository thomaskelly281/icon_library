import { mdiHelpNetwork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpNetwork(props: IconComponentProps) {
  return <Icon path={mdiHelpNetwork} {...props} />;
}

export { mdiHelpNetwork as path };

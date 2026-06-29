import { mdiHelpCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpCircle(props: IconComponentProps) {
  return <Icon path={mdiHelpCircle} {...props} />;
}

export { mdiHelpCircle as path };

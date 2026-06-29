import { mdiHelpBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpBox(props: IconComponentProps) {
  return <Icon path={mdiHelpBox} {...props} />;
}

export { mdiHelpBox as path };

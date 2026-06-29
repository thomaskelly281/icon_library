import { mdiHelpRhombus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpRhombus(props: IconComponentProps) {
  return <Icon path={mdiHelpRhombus} {...props} />;
}

export { mdiHelpRhombus as path };

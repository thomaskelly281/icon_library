import { mdiHelpBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HelpBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiHelpBoxMultiple} {...props} />;
}

export { mdiHelpBoxMultiple as path };

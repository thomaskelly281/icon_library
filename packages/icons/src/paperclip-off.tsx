import { mdiPaperclipOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipOff(props: IconComponentProps) {
  return <Icon path={mdiPaperclipOff} {...props} />;
}

export { mdiPaperclipOff as path };

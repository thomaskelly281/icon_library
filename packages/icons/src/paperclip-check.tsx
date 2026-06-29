import { mdiPaperclipCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipCheck(props: IconComponentProps) {
  return <Icon path={mdiPaperclipCheck} {...props} />;
}

export { mdiPaperclipCheck as path };

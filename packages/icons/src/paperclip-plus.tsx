import { mdiPaperclipPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipPlus(props: IconComponentProps) {
  return <Icon path={mdiPaperclipPlus} {...props} />;
}

export { mdiPaperclipPlus as path };

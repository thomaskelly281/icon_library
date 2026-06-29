import { mdiPaperclipRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipRemove(props: IconComponentProps) {
  return <Icon path={mdiPaperclipRemove} {...props} />;
}

export { mdiPaperclipRemove as path };

import { mdiPaperclipLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PaperclipLock(props: IconComponentProps) {
  return <Icon path={mdiPaperclipLock} {...props} />;
}

export { mdiPaperclipLock as path };

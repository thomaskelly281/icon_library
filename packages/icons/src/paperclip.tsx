import { mdiPaperclip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Paperclip(props: IconComponentProps) {
  return <Icon path={mdiPaperclip} {...props} />;
}

export { mdiPaperclip as path };

import { mdiClipboardEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardEdit(props: IconComponentProps) {
  return <Icon path={mdiClipboardEdit} {...props} />;
}

export { mdiClipboardEdit as path };

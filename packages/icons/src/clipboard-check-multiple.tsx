import { mdiClipboardCheckMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardCheckMultiple(props: IconComponentProps) {
  return <Icon path={mdiClipboardCheckMultiple} {...props} />;
}

export { mdiClipboardCheckMultiple as path };

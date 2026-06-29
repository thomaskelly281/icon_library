import { mdiClipboardTextMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextMultiple(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextMultiple} {...props} />;
}

export { mdiClipboardTextMultiple as path };

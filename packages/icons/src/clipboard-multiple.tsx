import { mdiClipboardMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardMultiple(props: IconComponentProps) {
  return <Icon path={mdiClipboardMultiple} {...props} />;
}

export { mdiClipboardMultiple as path };

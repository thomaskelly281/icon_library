import { mdiClipboardPlayMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPlayMultiple(props: IconComponentProps) {
  return <Icon path={mdiClipboardPlayMultiple} {...props} />;
}

export { mdiClipboardPlayMultiple as path };

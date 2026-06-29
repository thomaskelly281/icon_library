import { mdiClipboardRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardRemove(props: IconComponentProps) {
  return <Icon path={mdiClipboardRemove} {...props} />;
}

export { mdiClipboardRemove as path };

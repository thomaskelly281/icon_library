import { mdiClipboardAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardAlert(props: IconComponentProps) {
  return <Icon path={mdiClipboardAlert} {...props} />;
}

export { mdiClipboardAlert as path };

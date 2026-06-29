import { mdiClipboardText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardText(props: IconComponentProps) {
  return <Icon path={mdiClipboardText} {...props} />;
}

export { mdiClipboardText as path };

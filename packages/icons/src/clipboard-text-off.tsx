import { mdiClipboardTextOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextOff(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextOff} {...props} />;
}

export { mdiClipboardTextOff as path };

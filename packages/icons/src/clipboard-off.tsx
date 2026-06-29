import { mdiClipboardOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardOff(props: IconComponentProps) {
  return <Icon path={mdiClipboardOff} {...props} />;
}

export { mdiClipboardOff as path };

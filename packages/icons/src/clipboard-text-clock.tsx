import { mdiClipboardTextClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextClock(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextClock} {...props} />;
}

export { mdiClipboardTextClock as path };

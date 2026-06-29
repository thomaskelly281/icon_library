import { mdiClipboardClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardClock(props: IconComponentProps) {
  return <Icon path={mdiClipboardClock} {...props} />;
}

export { mdiClipboardClock as path };

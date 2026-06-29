import { mdiClipboardTextPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextPlay(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextPlay} {...props} />;
}

export { mdiClipboardTextPlay as path };

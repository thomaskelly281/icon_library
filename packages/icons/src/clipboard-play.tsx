import { mdiClipboardPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPlay(props: IconComponentProps) {
  return <Icon path={mdiClipboardPlay} {...props} />;
}

export { mdiClipboardPlay as path };

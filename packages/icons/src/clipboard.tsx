import { mdiClipboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Clipboard(props: IconComponentProps) {
  return <Icon path={mdiClipboard} {...props} />;
}

export { mdiClipboard as path };

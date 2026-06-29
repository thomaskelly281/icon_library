import { mdiClipboardMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardMinus(props: IconComponentProps) {
  return <Icon path={mdiClipboardMinus} {...props} />;
}

export { mdiClipboardMinus as path };

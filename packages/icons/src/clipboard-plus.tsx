import { mdiClipboardPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPlus(props: IconComponentProps) {
  return <Icon path={mdiClipboardPlus} {...props} />;
}

export { mdiClipboardPlus as path };

import { mdiClipboardTextSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextSearch(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextSearch} {...props} />;
}

export { mdiClipboardTextSearch as path };

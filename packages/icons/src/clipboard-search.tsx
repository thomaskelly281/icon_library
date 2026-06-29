import { mdiClipboardSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardSearch(props: IconComponentProps) {
  return <Icon path={mdiClipboardSearch} {...props} />;
}

export { mdiClipboardSearch as path };

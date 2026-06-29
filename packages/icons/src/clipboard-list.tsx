import { mdiClipboardList } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardList(props: IconComponentProps) {
  return <Icon path={mdiClipboardList} {...props} />;
}

export { mdiClipboardList as path };

import { mdiClipboardArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowDown(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowDown} {...props} />;
}

export { mdiClipboardArrowDown as path };

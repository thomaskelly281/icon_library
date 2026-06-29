import { mdiClipboardArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowUp(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowUp} {...props} />;
}

export { mdiClipboardArrowUp as path };

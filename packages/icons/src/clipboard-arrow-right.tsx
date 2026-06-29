import { mdiClipboardArrowRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowRight(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowRight} {...props} />;
}

export { mdiClipboardArrowRight as path };

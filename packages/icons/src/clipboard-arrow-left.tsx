import { mdiClipboardArrowLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowLeft(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowLeft} {...props} />;
}

export { mdiClipboardArrowLeft as path };

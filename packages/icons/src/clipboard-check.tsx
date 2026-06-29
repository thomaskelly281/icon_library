import { mdiClipboardCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardCheck(props: IconComponentProps) {
  return <Icon path={mdiClipboardCheck} {...props} />;
}

export { mdiClipboardCheck as path };

import { mdiClipboardFlow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardFlow(props: IconComponentProps) {
  return <Icon path={mdiClipboardFlow} {...props} />;
}

export { mdiClipboardFlow as path };

import { mdiClipboardPulse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPulse(props: IconComponentProps) {
  return <Icon path={mdiClipboardPulse} {...props} />;
}

export { mdiClipboardPulse as path };

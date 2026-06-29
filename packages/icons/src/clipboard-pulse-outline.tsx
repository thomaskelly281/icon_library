import { mdiClipboardPulseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPulseOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardPulseOutline} {...props} />;
}

export { mdiClipboardPulseOutline as path };

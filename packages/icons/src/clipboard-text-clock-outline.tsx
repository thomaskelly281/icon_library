import { mdiClipboardTextClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextClockOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextClockOutline} {...props} />;
}

export { mdiClipboardTextClockOutline as path };

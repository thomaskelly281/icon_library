import { mdiClipboardClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardClockOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardClockOutline} {...props} />;
}

export { mdiClipboardClockOutline as path };

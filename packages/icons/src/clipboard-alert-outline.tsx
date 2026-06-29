import { mdiClipboardAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardAlertOutline} {...props} />;
}

export { mdiClipboardAlertOutline as path };

import { mdiClipboardTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextOutline} {...props} />;
}

export { mdiClipboardTextOutline as path };

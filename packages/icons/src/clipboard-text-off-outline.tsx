import { mdiClipboardTextOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextOffOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextOffOutline} {...props} />;
}

export { mdiClipboardTextOffOutline as path };

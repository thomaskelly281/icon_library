import { mdiClipboardTextMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardTextMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardTextMultipleOutline} {...props} />;
}

export { mdiClipboardTextMultipleOutline as path };

import { mdiClipboardMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardMultipleOutline} {...props} />;
}

export { mdiClipboardMultipleOutline as path };

import { mdiClipboardCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardCheckOutline} {...props} />;
}

export { mdiClipboardCheckOutline as path };

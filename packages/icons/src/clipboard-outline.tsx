import { mdiClipboardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardOutline} {...props} />;
}

export { mdiClipboardOutline as path };

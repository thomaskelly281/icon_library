import { mdiClipboardPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardPlayOutline} {...props} />;
}

export { mdiClipboardPlayOutline as path };

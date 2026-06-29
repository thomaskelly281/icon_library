import { mdiClipboardFileOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardFileOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardFileOutline} {...props} />;
}

export { mdiClipboardFileOutline as path };

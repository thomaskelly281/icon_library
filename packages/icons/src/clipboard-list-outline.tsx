import { mdiClipboardListOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardListOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardListOutline} {...props} />;
}

export { mdiClipboardListOutline as path };

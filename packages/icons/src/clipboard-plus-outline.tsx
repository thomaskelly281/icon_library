import { mdiClipboardPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardPlusOutline} {...props} />;
}

export { mdiClipboardPlusOutline as path };

import { mdiClipboardSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardSearchOutline} {...props} />;
}

export { mdiClipboardSearchOutline as path };

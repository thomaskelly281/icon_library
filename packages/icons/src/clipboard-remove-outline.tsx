import { mdiClipboardRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardRemoveOutline} {...props} />;
}

export { mdiClipboardRemoveOutline as path };

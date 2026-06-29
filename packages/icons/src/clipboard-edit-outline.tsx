import { mdiClipboardEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardEditOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardEditOutline} {...props} />;
}

export { mdiClipboardEditOutline as path };

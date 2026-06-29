import { mdiClipboardAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardAccountOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardAccountOutline} {...props} />;
}

export { mdiClipboardAccountOutline as path };

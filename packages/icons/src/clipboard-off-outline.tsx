import { mdiClipboardOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardOffOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardOffOutline} {...props} />;
}

export { mdiClipboardOffOutline as path };

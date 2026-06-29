import { mdiClipboardMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardMinusOutline} {...props} />;
}

export { mdiClipboardMinusOutline as path };

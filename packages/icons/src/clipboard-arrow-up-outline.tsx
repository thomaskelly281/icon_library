import { mdiClipboardArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowUpOutline} {...props} />;
}

export { mdiClipboardArrowUpOutline as path };

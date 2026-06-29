import { mdiClipboardArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowDownOutline} {...props} />;
}

export { mdiClipboardArrowDownOutline as path };

import { mdiClipboardArrowRightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClipboardArrowRightOutline(props: IconComponentProps) {
  return <Icon path={mdiClipboardArrowRightOutline} {...props} />;
}

export { mdiClipboardArrowRightOutline as path };

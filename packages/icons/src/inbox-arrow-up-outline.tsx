import { mdiInboxArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxArrowUpOutline} {...props} />;
}

export { mdiInboxArrowUpOutline as path };

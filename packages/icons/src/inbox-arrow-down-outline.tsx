import { mdiInboxArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxArrowDownOutline} {...props} />;
}

export { mdiInboxArrowDownOutline as path };

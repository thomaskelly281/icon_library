import { mdiInboxFullOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxFullOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxFullOutline} {...props} />;
}

export { mdiInboxFullOutline as path };

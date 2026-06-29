import { mdiInboxRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxRemoveOutline} {...props} />;
}

export { mdiInboxRemoveOutline as path };

import { mdiInboxMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxMultipleOutline} {...props} />;
}

export { mdiInboxMultipleOutline as path };

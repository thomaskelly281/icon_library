import { mdiInboxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxOutline(props: IconComponentProps) {
  return <Icon path={mdiInboxOutline} {...props} />;
}

export { mdiInboxOutline as path };

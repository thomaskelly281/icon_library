import { mdiInboxRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxRemove(props: IconComponentProps) {
  return <Icon path={mdiInboxRemove} {...props} />;
}

export { mdiInboxRemove as path };

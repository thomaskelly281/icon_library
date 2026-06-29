import { mdiInboxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxMultiple(props: IconComponentProps) {
  return <Icon path={mdiInboxMultiple} {...props} />;
}

export { mdiInboxMultiple as path };

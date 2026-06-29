import { mdiInbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Inbox(props: IconComponentProps) {
  return <Icon path={mdiInbox} {...props} />;
}

export { mdiInbox as path };

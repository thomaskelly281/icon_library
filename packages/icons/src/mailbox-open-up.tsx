import { mdiMailboxOpenUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxOpenUp(props: IconComponentProps) {
  return <Icon path={mdiMailboxOpenUp} {...props} />;
}

export { mdiMailboxOpenUp as path };

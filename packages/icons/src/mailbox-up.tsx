import { mdiMailboxUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxUp(props: IconComponentProps) {
  return <Icon path={mdiMailboxUp} {...props} />;
}

export { mdiMailboxUp as path };

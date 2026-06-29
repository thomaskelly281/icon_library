import { mdiMailboxOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxOpen(props: IconComponentProps) {
  return <Icon path={mdiMailboxOpen} {...props} />;
}

export { mdiMailboxOpen as path };

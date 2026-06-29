import { mdiMailbox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Mailbox(props: IconComponentProps) {
  return <Icon path={mdiMailbox} {...props} />;
}

export { mdiMailbox as path };

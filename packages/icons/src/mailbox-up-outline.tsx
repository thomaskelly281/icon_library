import { mdiMailboxUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxUpOutline(props: IconComponentProps) {
  return <Icon path={mdiMailboxUpOutline} {...props} />;
}

export { mdiMailboxUpOutline as path };

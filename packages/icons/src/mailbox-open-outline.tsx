import { mdiMailboxOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiMailboxOpenOutline} {...props} />;
}

export { mdiMailboxOpenOutline as path };

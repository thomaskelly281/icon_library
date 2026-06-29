import { mdiMailboxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MailboxOutline(props: IconComponentProps) {
  return <Icon path={mdiMailboxOutline} {...props} />;
}

export { mdiMailboxOutline as path };

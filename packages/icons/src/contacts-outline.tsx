import { mdiContactsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ContactsOutline(props: IconComponentProps) {
  return <Icon path={mdiContactsOutline} {...props} />;
}

export { mdiContactsOutline as path };

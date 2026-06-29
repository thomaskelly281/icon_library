import { mdiContacts } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Contacts(props: IconComponentProps) {
  return <Icon path={mdiContacts} {...props} />;
}

export { mdiContacts as path };

import { mdiEmailMarkAsUnread } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailMarkAsUnread(props: IconComponentProps) {
  return <Icon path={mdiEmailMarkAsUnread} {...props} />;
}

export { mdiEmailMarkAsUnread as path };

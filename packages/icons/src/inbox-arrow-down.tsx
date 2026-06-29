import { mdiInboxArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxArrowDown(props: IconComponentProps) {
  return <Icon path={mdiInboxArrowDown} {...props} />;
}

export { mdiInboxArrowDown as path };

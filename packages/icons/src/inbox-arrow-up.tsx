import { mdiInboxArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxArrowUp(props: IconComponentProps) {
  return <Icon path={mdiInboxArrowUp} {...props} />;
}

export { mdiInboxArrowUp as path };

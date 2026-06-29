import { mdiInboxFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InboxFull(props: IconComponentProps) {
  return <Icon path={mdiInboxFull} {...props} />;
}

export { mdiInboxFull as path };

import { mdiMessageReply } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageReply(props: IconComponentProps) {
  return <Icon path={mdiMessageReply} {...props} />;
}

export { mdiMessageReply as path };

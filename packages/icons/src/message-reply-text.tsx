import { mdiMessageReplyText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageReplyText(props: IconComponentProps) {
  return <Icon path={mdiMessageReplyText} {...props} />;
}

export { mdiMessageReplyText as path };

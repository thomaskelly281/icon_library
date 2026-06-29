import { mdiMessageReplyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageReplyOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageReplyOutline} {...props} />;
}

export { mdiMessageReplyOutline as path };

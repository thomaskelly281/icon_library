import { mdiMessageReplyTextOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageReplyTextOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageReplyTextOutline} {...props} />;
}

export { mdiMessageReplyTextOutline as path };

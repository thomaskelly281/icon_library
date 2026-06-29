import { mdiChatPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiChatPlusOutline} {...props} />;
}

export { mdiChatPlusOutline as path };

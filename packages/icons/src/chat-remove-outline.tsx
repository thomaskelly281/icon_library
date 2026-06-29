import { mdiChatRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiChatRemoveOutline} {...props} />;
}

export { mdiChatRemoveOutline as path };

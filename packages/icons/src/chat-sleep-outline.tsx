import { mdiChatSleepOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatSleepOutline(props: IconComponentProps) {
  return <Icon path={mdiChatSleepOutline} {...props} />;
}

export { mdiChatSleepOutline as path };

import { mdiChatSleep } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatSleep(props: IconComponentProps) {
  return <Icon path={mdiChatSleep} {...props} />;
}

export { mdiChatSleep as path };

import { mdiChatPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatPlus(props: IconComponentProps) {
  return <Icon path={mdiChatPlus} {...props} />;
}

export { mdiChatPlus as path };

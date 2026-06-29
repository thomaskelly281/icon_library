import { mdiChatRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatRemove(props: IconComponentProps) {
  return <Icon path={mdiChatRemove} {...props} />;
}

export { mdiChatRemove as path };

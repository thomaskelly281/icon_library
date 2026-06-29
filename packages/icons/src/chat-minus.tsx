import { mdiChatMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatMinus(props: IconComponentProps) {
  return <Icon path={mdiChatMinus} {...props} />;
}

export { mdiChatMinus as path };

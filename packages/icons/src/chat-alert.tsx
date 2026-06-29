import { mdiChatAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatAlert(props: IconComponentProps) {
  return <Icon path={mdiChatAlert} {...props} />;
}

export { mdiChatAlert as path };

import { mdiChatQuestion } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatQuestion(props: IconComponentProps) {
  return <Icon path={mdiChatQuestion} {...props} />;
}

export { mdiChatQuestion as path };

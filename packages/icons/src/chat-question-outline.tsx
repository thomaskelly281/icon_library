import { mdiChatQuestionOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatQuestionOutline(props: IconComponentProps) {
  return <Icon path={mdiChatQuestionOutline} {...props} />;
}

export { mdiChatQuestionOutline as path };

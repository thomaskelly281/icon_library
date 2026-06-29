import { mdiChatMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiChatMinusOutline} {...props} />;
}

export { mdiChatMinusOutline as path };

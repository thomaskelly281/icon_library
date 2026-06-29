import { mdiChatOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatOutline(props: IconComponentProps) {
  return <Icon path={mdiChatOutline} {...props} />;
}

export { mdiChatOutline as path };

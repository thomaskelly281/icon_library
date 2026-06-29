import { mdiChatAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiChatAlertOutline} {...props} />;
}

export { mdiChatAlertOutline as path };

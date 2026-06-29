import { mdiChatProcessingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatProcessingOutline(props: IconComponentProps) {
  return <Icon path={mdiChatProcessingOutline} {...props} />;
}

export { mdiChatProcessingOutline as path };

import { mdiChatProcessing } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChatProcessing(props: IconComponentProps) {
  return <Icon path={mdiChatProcessing} {...props} />;
}

export { mdiChatProcessing as path };

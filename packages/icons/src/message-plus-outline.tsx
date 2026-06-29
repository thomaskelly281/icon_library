import { mdiMessagePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessagePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiMessagePlusOutline} {...props} />;
}

export { mdiMessagePlusOutline as path };

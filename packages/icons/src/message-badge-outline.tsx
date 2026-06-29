import { mdiMessageBadgeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBadgeOutline(props: IconComponentProps) {
  return <Icon path={mdiMessageBadgeOutline} {...props} />;
}

export { mdiMessageBadgeOutline as path };

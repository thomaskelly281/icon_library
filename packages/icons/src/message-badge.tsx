import { mdiMessageBadge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBadge(props: IconComponentProps) {
  return <Icon path={mdiMessageBadge} {...props} />;
}

export { mdiMessageBadge as path };

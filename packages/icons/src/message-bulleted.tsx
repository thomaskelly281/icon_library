import { mdiMessageBulleted } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBulleted(props: IconComponentProps) {
  return <Icon path={mdiMessageBulleted} {...props} />;
}

export { mdiMessageBulleted as path };

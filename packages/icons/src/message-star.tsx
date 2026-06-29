import { mdiMessageStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageStar(props: IconComponentProps) {
  return <Icon path={mdiMessageStar} {...props} />;
}

export { mdiMessageStar as path };

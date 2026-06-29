import { mdiMessageCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageCog(props: IconComponentProps) {
  return <Icon path={mdiMessageCog} {...props} />;
}

export { mdiMessageCog as path };

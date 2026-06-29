import { mdiMessageLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageLock(props: IconComponentProps) {
  return <Icon path={mdiMessageLock} {...props} />;
}

export { mdiMessageLock as path };

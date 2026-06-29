import { mdiMessageTextLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageTextLock(props: IconComponentProps) {
  return <Icon path={mdiMessageTextLock} {...props} />;
}

export { mdiMessageTextLock as path };

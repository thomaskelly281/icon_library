import { mdiSendLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SendLock(props: IconComponentProps) {
  return <Icon path={mdiSendLock} {...props} />;
}

export { mdiSendLock as path };

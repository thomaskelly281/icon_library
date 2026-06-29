import { mdiLockOpenRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenRemove(props: IconComponentProps) {
  return <Icon path={mdiLockOpenRemove} {...props} />;
}

export { mdiLockOpenRemove as path };

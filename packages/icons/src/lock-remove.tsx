import { mdiLockRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockRemove(props: IconComponentProps) {
  return <Icon path={mdiLockRemove} {...props} />;
}

export { mdiLockRemove as path };

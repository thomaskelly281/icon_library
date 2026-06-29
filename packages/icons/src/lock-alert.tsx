import { mdiLockAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockAlert(props: IconComponentProps) {
  return <Icon path={mdiLockAlert} {...props} />;
}

export { mdiLockAlert as path };

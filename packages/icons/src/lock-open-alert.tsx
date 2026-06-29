import { mdiLockOpenAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenAlert(props: IconComponentProps) {
  return <Icon path={mdiLockOpenAlert} {...props} />;
}

export { mdiLockOpenAlert as path };

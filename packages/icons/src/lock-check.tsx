import { mdiLockCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockCheck(props: IconComponentProps) {
  return <Icon path={mdiLockCheck} {...props} />;
}

export { mdiLockCheck as path };

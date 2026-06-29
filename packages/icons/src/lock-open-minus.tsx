import { mdiLockOpenMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenMinus(props: IconComponentProps) {
  return <Icon path={mdiLockOpenMinus} {...props} />;
}

export { mdiLockOpenMinus as path };

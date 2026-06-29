import { mdiLockOpenCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenCheck(props: IconComponentProps) {
  return <Icon path={mdiLockOpenCheck} {...props} />;
}

export { mdiLockOpenCheck as path };

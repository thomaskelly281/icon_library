import { mdiLockOpenPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpenPlus(props: IconComponentProps) {
  return <Icon path={mdiLockOpenPlus} {...props} />;
}

export { mdiLockOpenPlus as path };

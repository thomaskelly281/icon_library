import { mdiLockMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockMinus(props: IconComponentProps) {
  return <Icon path={mdiLockMinus} {...props} />;
}

export { mdiLockMinus as path };

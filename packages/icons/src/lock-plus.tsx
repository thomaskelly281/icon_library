import { mdiLockPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPlus(props: IconComponentProps) {
  return <Icon path={mdiLockPlus} {...props} />;
}

export { mdiLockPlus as path };

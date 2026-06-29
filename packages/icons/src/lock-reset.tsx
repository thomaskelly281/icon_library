import { mdiLockReset } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockReset(props: IconComponentProps) {
  return <Icon path={mdiLockReset} {...props} />;
}

export { mdiLockReset as path };

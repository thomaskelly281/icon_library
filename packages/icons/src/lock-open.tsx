import { mdiLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockOpen(props: IconComponentProps) {
  return <Icon path={mdiLockOpen} {...props} />;
}

export { mdiLockOpen as path };

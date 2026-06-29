import { mdiLockPercentOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockPercentOpen(props: IconComponentProps) {
  return <Icon path={mdiLockPercentOpen} {...props} />;
}

export { mdiLockPercentOpen as path };

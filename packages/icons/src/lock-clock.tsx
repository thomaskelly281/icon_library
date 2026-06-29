import { mdiLockClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LockClock(props: IconComponentProps) {
  return <Icon path={mdiLockClock} {...props} />;
}

export { mdiLockClock as path };

import { mdiTimerLockOpen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerLockOpen(props: IconComponentProps) {
  return <Icon path={mdiTimerLockOpen} {...props} />;
}

export { mdiTimerLockOpen as path };

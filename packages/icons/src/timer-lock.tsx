import { mdiTimerLock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerLock(props: IconComponentProps) {
  return <Icon path={mdiTimerLock} {...props} />;
}

export { mdiTimerLock as path };

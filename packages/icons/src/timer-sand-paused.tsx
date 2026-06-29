import { mdiTimerSandPaused } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSandPaused(props: IconComponentProps) {
  return <Icon path={mdiTimerSandPaused} {...props} />;
}

export { mdiTimerSandPaused as path };

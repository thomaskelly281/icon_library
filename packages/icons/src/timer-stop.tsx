import { mdiTimerStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerStop(props: IconComponentProps) {
  return <Icon path={mdiTimerStop} {...props} />;
}

export { mdiTimerStop as path };

import { mdiTimerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerOff(props: IconComponentProps) {
  return <Icon path={mdiTimerOff} {...props} />;
}

export { mdiTimerOff as path };

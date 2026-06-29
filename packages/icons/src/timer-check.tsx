import { mdiTimerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCheck(props: IconComponentProps) {
  return <Icon path={mdiTimerCheck} {...props} />;
}

export { mdiTimerCheck as path };

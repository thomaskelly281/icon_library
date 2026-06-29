import { mdiTimerSandComplete } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSandComplete(props: IconComponentProps) {
  return <Icon path={mdiTimerSandComplete} {...props} />;
}

export { mdiTimerSandComplete as path };

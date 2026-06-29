import { mdiTimerCancel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCancel(props: IconComponentProps) {
  return <Icon path={mdiTimerCancel} {...props} />;
}

export { mdiTimerCancel as path };

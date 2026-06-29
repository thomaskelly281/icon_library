import { mdiTimerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerAlert(props: IconComponentProps) {
  return <Icon path={mdiTimerAlert} {...props} />;
}

export { mdiTimerAlert as path };

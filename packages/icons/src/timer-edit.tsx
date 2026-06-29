import { mdiTimerEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerEdit(props: IconComponentProps) {
  return <Icon path={mdiTimerEdit} {...props} />;
}

export { mdiTimerEdit as path };

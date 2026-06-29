import { mdiTimerRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerRemove(props: IconComponentProps) {
  return <Icon path={mdiTimerRemove} {...props} />;
}

export { mdiTimerRemove as path };

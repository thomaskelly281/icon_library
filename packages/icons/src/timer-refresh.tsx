import { mdiTimerRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerRefresh(props: IconComponentProps) {
  return <Icon path={mdiTimerRefresh} {...props} />;
}

export { mdiTimerRefresh as path };

import { mdiTimerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPlus(props: IconComponentProps) {
  return <Icon path={mdiTimerPlus} {...props} />;
}

export { mdiTimerPlus as path };

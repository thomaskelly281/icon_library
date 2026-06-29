import { mdiTimerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMinus(props: IconComponentProps) {
  return <Icon path={mdiTimerMinus} {...props} />;
}

export { mdiTimerMinus as path };

import { mdiTimerStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerStar(props: IconComponentProps) {
  return <Icon path={mdiTimerStar} {...props} />;
}

export { mdiTimerStar as path };

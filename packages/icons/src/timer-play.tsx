import { mdiTimerPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPlay(props: IconComponentProps) {
  return <Icon path={mdiTimerPlay} {...props} />;
}

export { mdiTimerPlay as path };

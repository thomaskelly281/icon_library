import { mdiTimerPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPause(props: IconComponentProps) {
  return <Icon path={mdiTimerPause} {...props} />;
}

export { mdiTimerPause as path };

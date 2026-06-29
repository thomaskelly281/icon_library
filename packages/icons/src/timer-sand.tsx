import { mdiTimerSand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSand(props: IconComponentProps) {
  return <Icon path={mdiTimerSand} {...props} />;
}

export { mdiTimerSand as path };

import { mdiTimerMusic } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMusic(props: IconComponentProps) {
  return <Icon path={mdiTimerMusic} {...props} />;
}

export { mdiTimerMusic as path };

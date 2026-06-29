import { mdiTimerCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCog(props: IconComponentProps) {
  return <Icon path={mdiTimerCog} {...props} />;
}

export { mdiTimerCog as path };

import { mdiTimerSandFull } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSandFull(props: IconComponentProps) {
  return <Icon path={mdiTimerSandFull} {...props} />;
}

export { mdiTimerSandFull as path };

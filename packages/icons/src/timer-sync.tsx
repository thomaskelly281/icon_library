import { mdiTimerSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSync(props: IconComponentProps) {
  return <Icon path={mdiTimerSync} {...props} />;
}

export { mdiTimerSync as path };

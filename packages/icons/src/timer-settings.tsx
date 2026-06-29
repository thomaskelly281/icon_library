import { mdiTimerSettings } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSettings(props: IconComponentProps) {
  return <Icon path={mdiTimerSettings} {...props} />;
}

export { mdiTimerSettings as path };

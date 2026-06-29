import { mdiAlarmSnooze } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmSnooze(props: IconComponentProps) {
  return <Icon path={mdiAlarmSnooze} {...props} />;
}

export { mdiAlarmSnooze as path };

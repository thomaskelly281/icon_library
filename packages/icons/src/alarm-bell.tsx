import { mdiAlarmBell } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmBell(props: IconComponentProps) {
  return <Icon path={mdiAlarmBell} {...props} />;
}

export { mdiAlarmBell as path };

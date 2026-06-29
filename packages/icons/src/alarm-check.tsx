import { mdiAlarmCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmCheck(props: IconComponentProps) {
  return <Icon path={mdiAlarmCheck} {...props} />;
}

export { mdiAlarmCheck as path };

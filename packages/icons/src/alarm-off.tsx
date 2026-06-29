import { mdiAlarmOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmOff(props: IconComponentProps) {
  return <Icon path={mdiAlarmOff} {...props} />;
}

export { mdiAlarmOff as path };

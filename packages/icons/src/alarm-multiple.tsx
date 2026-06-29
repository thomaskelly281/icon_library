import { mdiAlarmMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmMultiple(props: IconComponentProps) {
  return <Icon path={mdiAlarmMultiple} {...props} />;
}

export { mdiAlarmMultiple as path };

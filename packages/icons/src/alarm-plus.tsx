import { mdiAlarmPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmPlus(props: IconComponentProps) {
  return <Icon path={mdiAlarmPlus} {...props} />;
}

export { mdiAlarmPlus as path };

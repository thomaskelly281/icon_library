import { mdiAlarmLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmLight(props: IconComponentProps) {
  return <Icon path={mdiAlarmLight} {...props} />;
}

export { mdiAlarmLight as path };

import { mdiAlarmNote } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmNote(props: IconComponentProps) {
  return <Icon path={mdiAlarmNote} {...props} />;
}

export { mdiAlarmNote as path };

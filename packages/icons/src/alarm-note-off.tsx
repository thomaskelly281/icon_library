import { mdiAlarmNoteOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmNoteOff(props: IconComponentProps) {
  return <Icon path={mdiAlarmNoteOff} {...props} />;
}

export { mdiAlarmNoteOff as path };

import { mdiTimetable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Timetable(props: IconComponentProps) {
  return <Icon path={mdiTimetable} {...props} />;
}

export { mdiTimetable as path };

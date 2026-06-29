import { mdiAlarm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Alarm(props: IconComponentProps) {
  return <Icon path={mdiAlarm} {...props} />;
}

export { mdiAlarm as path };

import { mdiAlarmPanel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmPanel(props: IconComponentProps) {
  return <Icon path={mdiAlarmPanel} {...props} />;
}

export { mdiAlarmPanel as path };

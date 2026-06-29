import { mdiAlarmLightOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmLightOff(props: IconComponentProps) {
  return <Icon path={mdiAlarmLightOff} {...props} />;
}

export { mdiAlarmLightOff as path };

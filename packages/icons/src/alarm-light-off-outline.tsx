import { mdiAlarmLightOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmLightOffOutline(props: IconComponentProps) {
  return <Icon path={mdiAlarmLightOffOutline} {...props} />;
}

export { mdiAlarmLightOffOutline as path };

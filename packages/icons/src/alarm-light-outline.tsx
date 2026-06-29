import { mdiAlarmLightOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmLightOutline(props: IconComponentProps) {
  return <Icon path={mdiAlarmLightOutline} {...props} />;
}

export { mdiAlarmLightOutline as path };

import { mdiAlarmPanelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlarmPanelOutline(props: IconComponentProps) {
  return <Icon path={mdiAlarmPanelOutline} {...props} />;
}

export { mdiAlarmPanelOutline as path };

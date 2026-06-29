import { mdiTimerSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerSettingsOutline} {...props} />;
}

export { mdiTimerSettingsOutline as path };

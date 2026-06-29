import { mdiTimerAlertOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerAlertOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerAlertOutline} {...props} />;
}

export { mdiTimerAlertOutline as path };

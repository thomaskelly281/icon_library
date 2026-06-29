import { mdiTimerStopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerStopOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerStopOutline} {...props} />;
}

export { mdiTimerStopOutline as path };

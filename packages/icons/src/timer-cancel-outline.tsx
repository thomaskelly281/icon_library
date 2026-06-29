import { mdiTimerCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerCancelOutline} {...props} />;
}

export { mdiTimerCancelOutline as path };

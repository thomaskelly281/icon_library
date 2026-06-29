import { mdiTimerSyncOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerSyncOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerSyncOutline} {...props} />;
}

export { mdiTimerSyncOutline as path };

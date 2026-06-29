import { mdiTimerLockOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerLockOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerLockOpenOutline} {...props} />;
}

export { mdiTimerLockOpenOutline as path };

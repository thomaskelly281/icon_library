import { mdiTimerLockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerLockOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerLockOutline} {...props} />;
}

export { mdiTimerLockOutline as path };

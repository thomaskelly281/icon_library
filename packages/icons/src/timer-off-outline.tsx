import { mdiTimerOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerOffOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerOffOutline} {...props} />;
}

export { mdiTimerOffOutline as path };

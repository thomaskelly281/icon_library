import { mdiTimerMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerMinusOutline} {...props} />;
}

export { mdiTimerMinusOutline as path };

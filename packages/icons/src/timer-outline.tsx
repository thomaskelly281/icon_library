import { mdiTimerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerOutline} {...props} />;
}

export { mdiTimerOutline as path };

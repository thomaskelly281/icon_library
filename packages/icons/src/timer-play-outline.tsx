import { mdiTimerPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerPlayOutline} {...props} />;
}

export { mdiTimerPlayOutline as path };

import { mdiTimerMarkerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMarkerOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerMarkerOutline} {...props} />;
}

export { mdiTimerMarkerOutline as path };

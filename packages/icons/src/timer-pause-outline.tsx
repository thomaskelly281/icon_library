import { mdiTimerPauseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPauseOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerPauseOutline} {...props} />;
}

export { mdiTimerPauseOutline as path };

import { mdiTimerStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerStarOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerStarOutline} {...props} />;
}

export { mdiTimerStarOutline as path };

import { mdiTimerRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerRefreshOutline} {...props} />;
}

export { mdiTimerRefreshOutline as path };

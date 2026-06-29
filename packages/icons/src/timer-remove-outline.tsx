import { mdiTimerRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerRemoveOutline} {...props} />;
}

export { mdiTimerRemoveOutline as path };

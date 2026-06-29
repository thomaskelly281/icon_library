import { mdiTimerEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerEditOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerEditOutline} {...props} />;
}

export { mdiTimerEditOutline as path };

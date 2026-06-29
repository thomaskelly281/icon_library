import { mdiTimerPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerPlusOutline} {...props} />;
}

export { mdiTimerPlusOutline as path };

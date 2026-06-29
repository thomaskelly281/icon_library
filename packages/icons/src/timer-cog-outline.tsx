import { mdiTimerCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCogOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerCogOutline} {...props} />;
}

export { mdiTimerCogOutline as path };

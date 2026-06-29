import { mdiTimerMusicOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMusicOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerMusicOutline} {...props} />;
}

export { mdiTimerMusicOutline as path };

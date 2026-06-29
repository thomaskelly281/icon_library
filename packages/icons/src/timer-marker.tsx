import { mdiTimerMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerMarker(props: IconComponentProps) {
  return <Icon path={mdiTimerMarker} {...props} />;
}

export { mdiTimerMarker as path };

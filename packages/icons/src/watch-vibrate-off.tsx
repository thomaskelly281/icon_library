import { mdiWatchVibrateOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchVibrateOff(props: IconComponentProps) {
  return <Icon path={mdiWatchVibrateOff} {...props} />;
}

export { mdiWatchVibrateOff as path };

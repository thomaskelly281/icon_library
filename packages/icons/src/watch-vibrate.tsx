import { mdiWatchVibrate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WatchVibrate(props: IconComponentProps) {
  return <Icon path={mdiWatchVibrate} {...props} />;
}

export { mdiWatchVibrate as path };

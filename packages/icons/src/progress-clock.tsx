import { mdiProgressClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressClock(props: IconComponentProps) {
  return <Icon path={mdiProgressClock} {...props} />;
}

export { mdiProgressClock as path };

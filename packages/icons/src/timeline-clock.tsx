import { mdiTimelineClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimelineClock(props: IconComponentProps) {
  return <Icon path={mdiTimelineClock} {...props} />;
}

export { mdiTimelineClock as path };

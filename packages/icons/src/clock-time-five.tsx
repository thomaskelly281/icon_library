import { mdiClockTimeFive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeFive(props: IconComponentProps) {
  return <Icon path={mdiClockTimeFive} {...props} />;
}

export { mdiClockTimeFive as path };

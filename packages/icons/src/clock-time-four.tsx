import { mdiClockTimeFour } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeFour(props: IconComponentProps) {
  return <Icon path={mdiClockTimeFour} {...props} />;
}

export { mdiClockTimeFour as path };

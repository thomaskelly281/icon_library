import { mdiClockTimeSix } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeSix(props: IconComponentProps) {
  return <Icon path={mdiClockTimeSix} {...props} />;
}

export { mdiClockTimeSix as path };

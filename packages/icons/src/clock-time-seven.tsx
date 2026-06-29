import { mdiClockTimeSeven } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeSeven(props: IconComponentProps) {
  return <Icon path={mdiClockTimeSeven} {...props} />;
}

export { mdiClockTimeSeven as path };

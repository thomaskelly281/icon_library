import { mdiClockIn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockIn(props: IconComponentProps) {
  return <Icon path={mdiClockIn} {...props} />;
}

export { mdiClockIn as path };

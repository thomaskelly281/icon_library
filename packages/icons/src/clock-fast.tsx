import { mdiClockFast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockFast(props: IconComponentProps) {
  return <Icon path={mdiClockFast} {...props} />;
}

export { mdiClockFast as path };

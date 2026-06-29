import { mdiClockEnd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockEnd(props: IconComponentProps) {
  return <Icon path={mdiClockEnd} {...props} />;
}

export { mdiClockEnd as path };

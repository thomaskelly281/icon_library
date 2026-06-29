import { mdiClockStart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockStart(props: IconComponentProps) {
  return <Icon path={mdiClockStart} {...props} />;
}

export { mdiClockStart as path };

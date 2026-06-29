import { mdiClockOut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockOut(props: IconComponentProps) {
  return <Icon path={mdiClockOut} {...props} />;
}

export { mdiClockOut as path };

import { mdiClockTimeTen } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTen(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTen} {...props} />;
}

export { mdiClockTimeTen as path };

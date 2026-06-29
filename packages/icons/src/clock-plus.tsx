import { mdiClockPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockPlus(props: IconComponentProps) {
  return <Icon path={mdiClockPlus} {...props} />;
}

export { mdiClockPlus as path };

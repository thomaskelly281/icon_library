import { mdiClockDigital } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockDigital(props: IconComponentProps) {
  return <Icon path={mdiClockDigital} {...props} />;
}

export { mdiClockDigital as path };

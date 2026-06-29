import { mdiClockCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockCheck(props: IconComponentProps) {
  return <Icon path={mdiClockCheck} {...props} />;
}

export { mdiClockCheck as path };

import { mdiClockMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockMinus(props: IconComponentProps) {
  return <Icon path={mdiClockMinus} {...props} />;
}

export { mdiClockMinus as path };

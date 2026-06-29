import { mdiClockAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockAlert(props: IconComponentProps) {
  return <Icon path={mdiClockAlert} {...props} />;
}

export { mdiClockAlert as path };

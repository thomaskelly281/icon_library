import { mdiClockEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockEdit(props: IconComponentProps) {
  return <Icon path={mdiClockEdit} {...props} />;
}

export { mdiClockEdit as path };

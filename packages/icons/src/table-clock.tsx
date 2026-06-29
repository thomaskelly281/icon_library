import { mdiTableClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableClock(props: IconComponentProps) {
  return <Icon path={mdiTableClock} {...props} />;
}

export { mdiTableClock as path };

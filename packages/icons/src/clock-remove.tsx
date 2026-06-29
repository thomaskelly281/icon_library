import { mdiClockRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockRemove(props: IconComponentProps) {
  return <Icon path={mdiClockRemove} {...props} />;
}

export { mdiClockRemove as path };

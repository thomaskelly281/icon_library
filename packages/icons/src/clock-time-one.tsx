import { mdiClockTimeOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeOne(props: IconComponentProps) {
  return <Icon path={mdiClockTimeOne} {...props} />;
}

export { mdiClockTimeOne as path };

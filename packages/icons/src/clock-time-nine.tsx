import { mdiClockTimeNine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeNine(props: IconComponentProps) {
  return <Icon path={mdiClockTimeNine} {...props} />;
}

export { mdiClockTimeNine as path };

import { mdiClockTimeTwo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeTwo(props: IconComponentProps) {
  return <Icon path={mdiClockTimeTwo} {...props} />;
}

export { mdiClockTimeTwo as path };

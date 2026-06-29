import { mdiClockTimeEleven } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockTimeEleven(props: IconComponentProps) {
  return <Icon path={mdiClockTimeEleven} {...props} />;
}

export { mdiClockTimeEleven as path };

import { mdiClockStarFourPoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ClockStarFourPoints(props: IconComponentProps) {
  return <Icon path={mdiClockStarFourPoints} {...props} />;
}

export { mdiClockStarFourPoints as path };

import { mdiAirplaneClock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneClock(props: IconComponentProps) {
  return <Icon path={mdiAirplaneClock} {...props} />;
}

export { mdiAirplaneClock as path };

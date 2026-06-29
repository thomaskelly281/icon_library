import { mdiAirplaneTakeoff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneTakeoff(props: IconComponentProps) {
  return <Icon path={mdiAirplaneTakeoff} {...props} />;
}

export { mdiAirplaneTakeoff as path };

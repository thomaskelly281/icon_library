import { mdiAirport } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Airport(props: IconComponentProps) {
  return <Icon path={mdiAirport} {...props} />;
}

export { mdiAirport as path };

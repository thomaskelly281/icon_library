import { mdiAirplaneMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneMarker(props: IconComponentProps) {
  return <Icon path={mdiAirplaneMarker} {...props} />;
}

export { mdiAirplaneMarker as path };

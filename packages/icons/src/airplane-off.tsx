import { mdiAirplaneOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirplaneOff(props: IconComponentProps) {
  return <Icon path={mdiAirplaneOff} {...props} />;
}

export { mdiAirplaneOff as path };

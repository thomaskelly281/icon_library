import { mdiAirHumidifierOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirHumidifierOff(props: IconComponentProps) {
  return <Icon path={mdiAirHumidifierOff} {...props} />;
}

export { mdiAirHumidifierOff as path };

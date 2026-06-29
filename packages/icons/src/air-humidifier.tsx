import { mdiAirHumidifier } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirHumidifier(props: IconComponentProps) {
  return <Icon path={mdiAirHumidifier} {...props} />;
}

export { mdiAirHumidifier as path };

import { mdiAirPurifierOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirPurifierOff(props: IconComponentProps) {
  return <Icon path={mdiAirPurifierOff} {...props} />;
}

export { mdiAirPurifierOff as path };

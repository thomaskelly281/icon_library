import { mdiAirHorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AirHorn(props: IconComponentProps) {
  return <Icon path={mdiAirHorn} {...props} />;
}

export { mdiAirHorn as path };

import { mdiGasStationOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasStationOff(props: IconComponentProps) {
  return <Icon path={mdiGasStationOff} {...props} />;
}

export { mdiGasStationOff as path };

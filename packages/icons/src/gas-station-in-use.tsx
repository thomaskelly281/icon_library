import { mdiGasStationInUse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GasStationInUse(props: IconComponentProps) {
  return <Icon path={mdiGasStationInUse} {...props} />;
}

export { mdiGasStationInUse as path };

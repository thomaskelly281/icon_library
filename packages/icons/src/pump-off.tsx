import { mdiPumpOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PumpOff(props: IconComponentProps) {
  return <Icon path={mdiPumpOff} {...props} />;
}

export { mdiPumpOff as path };

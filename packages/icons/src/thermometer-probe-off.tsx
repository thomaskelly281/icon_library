import { mdiThermometerProbeOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerProbeOff(props: IconComponentProps) {
  return <Icon path={mdiThermometerProbeOff} {...props} />;
}

export { mdiThermometerProbeOff as path };

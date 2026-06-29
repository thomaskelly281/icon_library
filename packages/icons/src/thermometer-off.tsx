import { mdiThermometerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerOff(props: IconComponentProps) {
  return <Icon path={mdiThermometerOff} {...props} />;
}

export { mdiThermometerOff as path };

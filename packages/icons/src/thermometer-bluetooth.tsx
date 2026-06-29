import { mdiThermometerBluetooth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerBluetooth(props: IconComponentProps) {
  return <Icon path={mdiThermometerBluetooth} {...props} />;
}

export { mdiThermometerBluetooth as path };

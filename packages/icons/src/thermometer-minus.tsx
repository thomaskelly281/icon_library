import { mdiThermometerMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerMinus(props: IconComponentProps) {
  return <Icon path={mdiThermometerMinus} {...props} />;
}

export { mdiThermometerMinus as path };

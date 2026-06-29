import { mdiThermometerPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerPlus(props: IconComponentProps) {
  return <Icon path={mdiThermometerPlus} {...props} />;
}

export { mdiThermometerPlus as path };

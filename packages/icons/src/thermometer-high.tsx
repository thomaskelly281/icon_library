import { mdiThermometerHigh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerHigh(props: IconComponentProps) {
  return <Icon path={mdiThermometerHigh} {...props} />;
}

export { mdiThermometerHigh as path };

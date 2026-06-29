import { mdiThermometerLow } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerLow(props: IconComponentProps) {
  return <Icon path={mdiThermometerLow} {...props} />;
}

export { mdiThermometerLow as path };

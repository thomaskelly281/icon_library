import { mdiThermometerAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerAlert(props: IconComponentProps) {
  return <Icon path={mdiThermometerAlert} {...props} />;
}

export { mdiThermometerAlert as path };

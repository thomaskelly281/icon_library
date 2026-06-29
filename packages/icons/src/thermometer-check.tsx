import { mdiThermometerCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerCheck(props: IconComponentProps) {
  return <Icon path={mdiThermometerCheck} {...props} />;
}

export { mdiThermometerCheck as path };

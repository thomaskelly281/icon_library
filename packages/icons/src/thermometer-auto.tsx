import { mdiThermometerAuto } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerAuto(props: IconComponentProps) {
  return <Icon path={mdiThermometerAuto} {...props} />;
}

export { mdiThermometerAuto as path };

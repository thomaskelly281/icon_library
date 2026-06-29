import { mdiThermometerProbe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerProbe(props: IconComponentProps) {
  return <Icon path={mdiThermometerProbe} {...props} />;
}

export { mdiThermometerProbe as path };

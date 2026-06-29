import { mdiMeterGas } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MeterGas(props: IconComponentProps) {
  return <Icon path={mdiMeterGas} {...props} />;
}

export { mdiMeterGas as path };

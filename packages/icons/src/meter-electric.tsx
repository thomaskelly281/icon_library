import { mdiMeterElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MeterElectric(props: IconComponentProps) {
  return <Icon path={mdiMeterElectric} {...props} />;
}

export { mdiMeterElectric as path };

import { mdiPowerPlugBattery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PowerPlugBattery(props: IconComponentProps) {
  return <Icon path={mdiPowerPlugBattery} {...props} />;
}

export { mdiPowerPlugBattery as path };

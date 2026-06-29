import { mdiCarBattery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBattery(props: IconComponentProps) {
  return <Icon path={mdiCarBattery} {...props} />;
}

export { mdiCarBattery as path };

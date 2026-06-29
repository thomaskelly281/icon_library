import { mdiCarBrakeTemperature } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeTemperature(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeTemperature} {...props} />;
}

export { mdiCarBrakeTemperature as path };

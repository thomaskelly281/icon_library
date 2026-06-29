import { mdiCarBrakeParking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeParking(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeParking} {...props} />;
}

export { mdiCarBrakeParking as path };

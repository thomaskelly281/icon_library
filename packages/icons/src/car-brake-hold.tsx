import { mdiCarBrakeHold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeHold(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeHold} {...props} />;
}

export { mdiCarBrakeHold as path };

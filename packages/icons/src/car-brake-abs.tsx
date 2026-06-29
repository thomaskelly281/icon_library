import { mdiCarBrakeAbs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeAbs(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeAbs} {...props} />;
}

export { mdiCarBrakeAbs as path };

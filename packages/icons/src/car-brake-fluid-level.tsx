import { mdiCarBrakeFluidLevel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarBrakeFluidLevel(props: IconComponentProps) {
  return <Icon path={mdiCarBrakeFluidLevel} {...props} />;
}

export { mdiCarBrakeFluidLevel as path };

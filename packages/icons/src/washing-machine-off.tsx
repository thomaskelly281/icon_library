import { mdiWashingMachineOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WashingMachineOff(props: IconComponentProps) {
  return <Icon path={mdiWashingMachineOff} {...props} />;
}

export { mdiWashingMachineOff as path };

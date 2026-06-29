import { mdiWashingMachineAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WashingMachineAlert(props: IconComponentProps) {
  return <Icon path={mdiWashingMachineAlert} {...props} />;
}

export { mdiWashingMachineAlert as path };

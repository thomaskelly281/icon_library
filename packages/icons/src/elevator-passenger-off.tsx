import { mdiElevatorPassengerOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevatorPassengerOff(props: IconComponentProps) {
  return <Icon path={mdiElevatorPassengerOff} {...props} />;
}

export { mdiElevatorPassengerOff as path };

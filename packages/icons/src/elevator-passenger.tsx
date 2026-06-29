import { mdiElevatorPassenger } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevatorPassenger(props: IconComponentProps) {
  return <Icon path={mdiElevatorPassenger} {...props} />;
}

export { mdiElevatorPassenger as path };

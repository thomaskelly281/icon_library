import { mdiElevatorUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevatorUp(props: IconComponentProps) {
  return <Icon path={mdiElevatorUp} {...props} />;
}

export { mdiElevatorUp as path };

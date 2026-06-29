import { mdiElevatorDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ElevatorDown(props: IconComponentProps) {
  return <Icon path={mdiElevatorDown} {...props} />;
}

export { mdiElevatorDown as path };

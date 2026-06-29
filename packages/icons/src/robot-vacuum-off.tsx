import { mdiRobotVacuumOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotVacuumOff(props: IconComponentProps) {
  return <Icon path={mdiRobotVacuumOff} {...props} />;
}

export { mdiRobotVacuumOff as path };

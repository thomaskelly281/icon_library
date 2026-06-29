import { mdiRobotVacuumAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotVacuumAlert(props: IconComponentProps) {
  return <Icon path={mdiRobotVacuumAlert} {...props} />;
}

export { mdiRobotVacuumAlert as path };

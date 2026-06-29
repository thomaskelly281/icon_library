import { mdiRobotVacuum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotVacuum(props: IconComponentProps) {
  return <Icon path={mdiRobotVacuum} {...props} />;
}

export { mdiRobotVacuum as path };

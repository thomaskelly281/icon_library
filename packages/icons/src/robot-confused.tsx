import { mdiRobotConfused } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotConfused(props: IconComponentProps) {
  return <Icon path={mdiRobotConfused} {...props} />;
}

export { mdiRobotConfused as path };

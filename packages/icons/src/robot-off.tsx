import { mdiRobotOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotOff(props: IconComponentProps) {
  return <Icon path={mdiRobotOff} {...props} />;
}

export { mdiRobotOff as path };

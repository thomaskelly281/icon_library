import { mdiRobotHappy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotHappy(props: IconComponentProps) {
  return <Icon path={mdiRobotHappy} {...props} />;
}

export { mdiRobotHappy as path };

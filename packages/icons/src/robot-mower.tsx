import { mdiRobotMower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotMower(props: IconComponentProps) {
  return <Icon path={mdiRobotMower} {...props} />;
}

export { mdiRobotMower as path };

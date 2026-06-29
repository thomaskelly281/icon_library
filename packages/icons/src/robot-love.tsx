import { mdiRobotLove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotLove(props: IconComponentProps) {
  return <Icon path={mdiRobotLove} {...props} />;
}

export { mdiRobotLove as path };

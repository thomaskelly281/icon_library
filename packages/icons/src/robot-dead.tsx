import { mdiRobotDead } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotDead(props: IconComponentProps) {
  return <Icon path={mdiRobotDead} {...props} />;
}

export { mdiRobotDead as path };

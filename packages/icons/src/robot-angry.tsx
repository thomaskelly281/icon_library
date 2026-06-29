import { mdiRobotAngry } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotAngry(props: IconComponentProps) {
  return <Icon path={mdiRobotAngry} {...props} />;
}

export { mdiRobotAngry as path };

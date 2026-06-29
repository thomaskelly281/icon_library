import { mdiRobotExcited } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotExcited(props: IconComponentProps) {
  return <Icon path={mdiRobotExcited} {...props} />;
}

export { mdiRobotExcited as path };

import { mdiRobotIndustrial } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotIndustrial(props: IconComponentProps) {
  return <Icon path={mdiRobotIndustrial} {...props} />;
}

export { mdiRobotIndustrial as path };

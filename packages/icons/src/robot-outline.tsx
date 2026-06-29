import { mdiRobotOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotOutline(props: IconComponentProps) {
  return <Icon path={mdiRobotOutline} {...props} />;
}

export { mdiRobotOutline as path };

import { mdiRobotHappyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotHappyOutline(props: IconComponentProps) {
  return <Icon path={mdiRobotHappyOutline} {...props} />;
}

export { mdiRobotHappyOutline as path };

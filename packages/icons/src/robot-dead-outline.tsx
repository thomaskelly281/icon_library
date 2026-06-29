import { mdiRobotDeadOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotDeadOutline(props: IconComponentProps) {
  return <Icon path={mdiRobotDeadOutline} {...props} />;
}

export { mdiRobotDeadOutline as path };

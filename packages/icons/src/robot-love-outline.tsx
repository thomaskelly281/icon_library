import { mdiRobotLoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RobotLoveOutline(props: IconComponentProps) {
  return <Icon path={mdiRobotLoveOutline} {...props} />;
}

export { mdiRobotLoveOutline as path };

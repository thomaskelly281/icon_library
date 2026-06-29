import { mdiRobot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Robot(props: IconComponentProps) {
  return <Icon path={mdiRobot} {...props} />;
}

export { mdiRobot as path };

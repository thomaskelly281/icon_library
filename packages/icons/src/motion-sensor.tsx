import { mdiMotionSensor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionSensor(props: IconComponentProps) {
  return <Icon path={mdiMotionSensor} {...props} />;
}

export { mdiMotionSensor as path };

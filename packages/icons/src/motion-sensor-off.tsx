import { mdiMotionSensorOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionSensorOff(props: IconComponentProps) {
  return <Icon path={mdiMotionSensorOff} {...props} />;
}

export { mdiMotionSensorOff as path };

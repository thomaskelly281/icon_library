import { mdiMotionPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionPause(props: IconComponentProps) {
  return <Icon path={mdiMotionPause} {...props} />;
}

export { mdiMotionPause as path };

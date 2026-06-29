import { mdiMotionPlay } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MotionPlay(props: IconComponentProps) {
  return <Icon path={mdiMotionPlay} {...props} />;
}

export { mdiMotionPlay as path };

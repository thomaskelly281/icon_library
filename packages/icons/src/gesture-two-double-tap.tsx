import { mdiGestureTwoDoubleTap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureTwoDoubleTap(props: IconComponentProps) {
  return <Icon path={mdiGestureTwoDoubleTap} {...props} />;
}

export { mdiGestureTwoDoubleTap as path };

import { mdiGestureSwipeUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeUp(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeUp} {...props} />;
}

export { mdiGestureSwipeUp as path };

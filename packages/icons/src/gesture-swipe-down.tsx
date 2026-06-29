import { mdiGestureSwipeDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeDown(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeDown} {...props} />;
}

export { mdiGestureSwipeDown as path };

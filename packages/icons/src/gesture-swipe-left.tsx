import { mdiGestureSwipeLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeLeft(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeLeft} {...props} />;
}

export { mdiGestureSwipeLeft as path };

import { mdiGestureSwipeVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeVertical(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeVertical} {...props} />;
}

export { mdiGestureSwipeVertical as path };

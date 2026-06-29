import { mdiGestureSwipeHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeHorizontal(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeHorizontal} {...props} />;
}

export { mdiGestureSwipeHorizontal as path };

import { mdiGestureSwipeRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipeRight(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipeRight} {...props} />;
}

export { mdiGestureSwipeRight as path };

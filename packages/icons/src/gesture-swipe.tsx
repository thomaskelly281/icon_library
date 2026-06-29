import { mdiGestureSwipe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureSwipe(props: IconComponentProps) {
  return <Icon path={mdiGestureSwipe} {...props} />;
}

export { mdiGestureSwipe as path };

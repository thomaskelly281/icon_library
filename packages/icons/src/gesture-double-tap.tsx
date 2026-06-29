import { mdiGestureDoubleTap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GestureDoubleTap(props: IconComponentProps) {
  return <Icon path={mdiGestureDoubleTap} {...props} />;
}

export { mdiGestureDoubleTap as path };

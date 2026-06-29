import { mdiCursorDefaultGesture } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefaultGesture(props: IconComponentProps) {
  return <Icon path={mdiCursorDefaultGesture} {...props} />;
}

export { mdiCursorDefaultGesture as path };

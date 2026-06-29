import { mdiGesture } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Gesture(props: IconComponentProps) {
  return <Icon path={mdiGesture} {...props} />;
}

export { mdiGesture as path };

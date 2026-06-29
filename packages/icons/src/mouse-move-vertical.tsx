import { mdiMouseMoveVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseMoveVertical(props: IconComponentProps) {
  return <Icon path={mdiMouseMoveVertical} {...props} />;
}

export { mdiMouseMoveVertical as path };

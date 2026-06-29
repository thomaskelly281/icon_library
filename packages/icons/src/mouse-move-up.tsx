import { mdiMouseMoveUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseMoveUp(props: IconComponentProps) {
  return <Icon path={mdiMouseMoveUp} {...props} />;
}

export { mdiMouseMoveUp as path };

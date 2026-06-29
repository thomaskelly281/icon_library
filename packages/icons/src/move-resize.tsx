import { mdiMoveResize } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoveResize(props: IconComponentProps) {
  return <Icon path={mdiMoveResize} {...props} />;
}

export { mdiMoveResize as path };

import { mdiMoveResizeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoveResizeVariant(props: IconComponentProps) {
  return <Icon path={mdiMoveResizeVariant} {...props} />;
}

export { mdiMoveResizeVariant as path };

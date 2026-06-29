import { mdiCursorMove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorMove(props: IconComponentProps) {
  return <Icon path={mdiCursorMove} {...props} />;
}

export { mdiCursorMove as path };

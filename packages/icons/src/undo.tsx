import { mdiUndo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Undo(props: IconComponentProps) {
  return <Icon path={mdiUndo} {...props} />;
}

export { mdiUndo as path };

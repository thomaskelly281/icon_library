import { mdiFileUndo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileUndo(props: IconComponentProps) {
  return <Icon path={mdiFileUndo} {...props} />;
}

export { mdiFileUndo as path };

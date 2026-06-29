import { mdiCursorPointer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorPointer(props: IconComponentProps) {
  return <Icon path={mdiCursorPointer} {...props} />;
}

export { mdiCursorPointer as path };

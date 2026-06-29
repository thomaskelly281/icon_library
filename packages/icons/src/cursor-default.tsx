import { mdiCursorDefault } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefault(props: IconComponentProps) {
  return <Icon path={mdiCursorDefault} {...props} />;
}

export { mdiCursorDefault as path };

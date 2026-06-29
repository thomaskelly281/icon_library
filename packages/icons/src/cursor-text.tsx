import { mdiCursorText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorText(props: IconComponentProps) {
  return <Icon path={mdiCursorText} {...props} />;
}

export { mdiCursorText as path };

import { mdiCursorDefaultClick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CursorDefaultClick(props: IconComponentProps) {
  return <Icon path={mdiCursorDefaultClick} {...props} />;
}

export { mdiCursorDefaultClick as path };

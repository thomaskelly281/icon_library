import { mdiButtonCursor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ButtonCursor(props: IconComponentProps) {
  return <Icon path={mdiButtonCursor} {...props} />;
}

export { mdiButtonCursor as path };

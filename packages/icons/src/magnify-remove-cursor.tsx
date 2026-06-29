import { mdiMagnifyRemoveCursor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyRemoveCursor(props: IconComponentProps) {
  return <Icon path={mdiMagnifyRemoveCursor} {...props} />;
}

export { mdiMagnifyRemoveCursor as path };

import { mdiMagnifyMinusCursor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyMinusCursor(props: IconComponentProps) {
  return <Icon path={mdiMagnifyMinusCursor} {...props} />;
}

export { mdiMagnifyMinusCursor as path };

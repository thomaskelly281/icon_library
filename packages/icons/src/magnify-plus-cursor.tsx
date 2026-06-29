import { mdiMagnifyPlusCursor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyPlusCursor(props: IconComponentProps) {
  return <Icon path={mdiMagnifyPlusCursor} {...props} />;
}

export { mdiMagnifyPlusCursor as path };

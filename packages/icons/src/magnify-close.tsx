import { mdiMagnifyClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyClose(props: IconComponentProps) {
  return <Icon path={mdiMagnifyClose} {...props} />;
}

export { mdiMagnifyClose as path };

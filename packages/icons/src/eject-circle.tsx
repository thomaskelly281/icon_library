import { mdiEjectCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EjectCircle(props: IconComponentProps) {
  return <Icon path={mdiEjectCircle} {...props} />;
}

export { mdiEjectCircle as path };

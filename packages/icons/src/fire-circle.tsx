import { mdiFireCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireCircle(props: IconComponentProps) {
  return <Icon path={mdiFireCircle} {...props} />;
}

export { mdiFireCircle as path };

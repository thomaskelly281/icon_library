import { mdiLeafCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeafCircle(props: IconComponentProps) {
  return <Icon path={mdiLeafCircle} {...props} />;
}

export { mdiLeafCircle as path };

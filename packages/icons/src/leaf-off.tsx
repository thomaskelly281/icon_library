import { mdiLeafOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeafOff(props: IconComponentProps) {
  return <Icon path={mdiLeafOff} {...props} />;
}

export { mdiLeafOff as path };

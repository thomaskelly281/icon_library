import { mdiLeafMaple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LeafMaple(props: IconComponentProps) {
  return <Icon path={mdiLeafMaple} {...props} />;
}

export { mdiLeafMaple as path };

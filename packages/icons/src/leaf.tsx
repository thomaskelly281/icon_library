import { mdiLeaf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Leaf(props: IconComponentProps) {
  return <Icon path={mdiLeaf} {...props} />;
}

export { mdiLeaf as path };

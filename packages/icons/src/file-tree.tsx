import { mdiFileTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileTree(props: IconComponentProps) {
  return <Icon path={mdiFileTree} {...props} />;
}

export { mdiFileTree as path };

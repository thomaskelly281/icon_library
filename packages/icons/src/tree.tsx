import { mdiTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tree(props: IconComponentProps) {
  return <Icon path={mdiTree} {...props} />;
}

export { mdiTree as path };

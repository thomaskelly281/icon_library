import { mdiFamilyTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FamilyTree(props: IconComponentProps) {
  return <Icon path={mdiFamilyTree} {...props} />;
}

export { mdiFamilyTree as path };

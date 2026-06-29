import { mdiPineTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PineTree(props: IconComponentProps) {
  return <Icon path={mdiPineTree} {...props} />;
}

export { mdiPineTree as path };

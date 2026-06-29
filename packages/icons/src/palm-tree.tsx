import { mdiPalmTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PalmTree(props: IconComponentProps) {
  return <Icon path={mdiPalmTree} {...props} />;
}

export { mdiPalmTree as path };

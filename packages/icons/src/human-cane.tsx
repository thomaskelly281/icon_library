import { mdiHumanCane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanCane(props: IconComponentProps) {
  return <Icon path={mdiHumanCane} {...props} />;
}

export { mdiHumanCane as path };

import { mdiHumanWhiteCane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumanWhiteCane(props: IconComponentProps) {
  return <Icon path={mdiHumanWhiteCane} {...props} />;
}

export { mdiHumanWhiteCane as path };

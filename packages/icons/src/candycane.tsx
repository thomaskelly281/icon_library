import { mdiCandycane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Candycane(props: IconComponentProps) {
  return <Icon path={mdiCandycane} {...props} />;
}

export { mdiCandycane as path };

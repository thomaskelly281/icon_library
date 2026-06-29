import { mdiBackspaceReverse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BackspaceReverse(props: IconComponentProps) {
  return <Icon path={mdiBackspaceReverse} {...props} />;
}

export { mdiBackspaceReverse as path };

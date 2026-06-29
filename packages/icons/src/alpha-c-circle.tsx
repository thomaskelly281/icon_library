import { mdiAlphaCCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaCCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaCCircle} {...props} />;
}

export { mdiAlphaCCircle as path };

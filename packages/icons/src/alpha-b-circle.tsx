import { mdiAlphaBCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaBCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaBCircle} {...props} />;
}

export { mdiAlphaBCircle as path };

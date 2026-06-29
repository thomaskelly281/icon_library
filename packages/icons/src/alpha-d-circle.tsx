import { mdiAlphaDCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaDCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaDCircle} {...props} />;
}

export { mdiAlphaDCircle as path };

import { mdiAlphaNCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaNCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaNCircle} {...props} />;
}

export { mdiAlphaNCircle as path };

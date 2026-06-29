import { mdiAlphaMCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaMCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaMCircle} {...props} />;
}

export { mdiAlphaMCircle as path };

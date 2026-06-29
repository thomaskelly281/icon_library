import { mdiAlphaPCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaPCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaPCircle} {...props} />;
}

export { mdiAlphaPCircle as path };

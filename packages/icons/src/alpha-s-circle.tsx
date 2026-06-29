import { mdiAlphaSCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaSCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaSCircle} {...props} />;
}

export { mdiAlphaSCircle as path };

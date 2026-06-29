import { mdiAlphaTCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaTCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaTCircle} {...props} />;
}

export { mdiAlphaTCircle as path };

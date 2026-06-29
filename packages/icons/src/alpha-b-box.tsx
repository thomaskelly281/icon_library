import { mdiAlphaBBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaBBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaBBox} {...props} />;
}

export { mdiAlphaBBox as path };

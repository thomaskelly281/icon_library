import { mdiAlphaTBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaTBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaTBox} {...props} />;
}

export { mdiAlphaTBox as path };

import { mdiAlphaN } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaN(props: IconComponentProps) {
  return <Icon path={mdiAlphaN} {...props} />;
}

export { mdiAlphaN as path };

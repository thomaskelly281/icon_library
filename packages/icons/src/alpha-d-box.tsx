import { mdiAlphaDBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaDBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaDBox} {...props} />;
}

export { mdiAlphaDBox as path };

import { mdiAlphaCBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaCBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaCBox} {...props} />;
}

export { mdiAlphaCBox as path };

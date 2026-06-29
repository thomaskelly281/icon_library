import { mdiAlphaMBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaMBox(props: IconComponentProps) {
  return <Icon path={mdiAlphaMBox} {...props} />;
}

export { mdiAlphaMBox as path };
